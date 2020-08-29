const React = (function () {

    let hooks = [];
    let idx = 0;

    function useState(initVal) {

        let state = hooks[idx] || initVal;
        let _idx = idx;
        let setState = newVal => {
            hooks[_idx] = newVal;
        }
        idx++;
        return [state, setState];
    }

    function useEffect(cb, depArray) {

        const oldDeps = hooks[idx];
        let hasChanged = true;
        if (oldDeps) {
            hasChanged = depArray.some((dep, i) => !Object.is(dep, oldDeps[i]));
        }
        if (hasChanged) cb();
        hooks[idx] = depArray;
        idx++;

    }

    function useRef(val) {
        return useState({
            current: val
        })[0]
    }

    function render(Com) {
        idx = 0;
        let C = Com();
        C.render();
        return C;
    }

    return {
        render,
        useState,
        useEffect,
        useRef
    }

})();



function Component() {

    const [count, setCount] = React.useState(1);
    const [text, setText] = React.useState('React');

    return {
        render: () => {
            console.log({
                count,
                text
            });
        },
        click: () => {
            setCount(count + 1);
        },
        type: (word) => {
            setText(word);
        }
    }
}

var app = React.render(Component);
app.click();
var app = React.render(Component);
app.type('Vue');
var app = React.render(Component);