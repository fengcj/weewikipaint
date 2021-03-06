/*
* 让jQuery支持自定义一个事件
* IE6\7\8不支持input事件，但支持propertychange事件
* 通过special模拟
*/
(function ($) {
    if ('onpropertychange' in document) {
      // 检查是否为可输入元素
      var rinput = /^INPUT|TEXTAREA$/,
        isInput = function(elem) {
          return rinput.test(elem.nodeName);
        };

      //元素就通过别的相近的事件处理，
      //然后通过一些条件判断从而达到模拟
      $.event.special.input = {
        setup: function() {
          var elem = this;
          if (!isInput(elem)) return false;
          $.data(elem, '@oldValue', elem.value);
          $.event.add(elem, 'propertychange', function(event) {
            // 元素属性任何变化都会触发propertychange事件
            // 需要屏蔽掉非value的改变，以便接近标准的onput事件
            if ($.data(this, '@oldValue') !== this.value) {
              $.event.trigger('input', null, this);
            };

            $.data(this, '@oldValue', this.value);
          });
        },
        teardown: function() {
          var elem = this;
          if (!isInput(elem)) return false;
          $.event.remove(elem, 'propertychange');
          $.removeData(elem, '@oldValue');
        }
      };
    };

    // 声明快捷方式：$(elem).input(function () {});
    $.fn.input = function(callback) {
      return this.bind('input', callback);
    };

  })(jQuery);



  var ret = $("#ret")

  $("#aaron").bind('input', function () {
      ret.append("<li>"+ arguments[0].target.value +"</li>")
  });p