1. https://mp.weixin.qq.com/s/eBJWejt_ZoFuZ6hoGE3egA



2. https://mp.weixin.qq.com/s/GLc_-fmbi4cmE7KZbhuV_g  // 文章中解法三说的不清楚，可以看
   https://blog.csdn.net/DERRANTCM/article/details/46811855


3. https://mp.weixin.qq.com/s/oEjwj-WrL8m7eCBJRDBN-g  // 想到了递归，但是没想到用max去比较 
    // 还可以使用按层遍历二叉树

4. https://mp.weixin.qq.com/s/xlBN77iUhXZ1iCNh3xAcow 二叉树搜索第 K 大节点   中序遍历

 // 仔细想想 文章中java code的解法


5. https://mp.weixin.qq.com/s/EiECZ7T1uui69LS4SUUI0Q // 这个题目没思路，其实树的题目基本就是前，中，后三种遍历为基本。

//https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/solution/mian-shi-ti-34-er-cha-shu-zhong-he-wei-mou-yi-zh-5/
// https://blog.csdn.net/ouyangyanlan/article/details/71516641



6. 
冒泡排序：
    第一层循环，是比较的次数，
    第二层循环，是比较的元素，起始点到终止点

        for(int i = 0 ;i<arr.length-1;i++){
            //第i趟比较
            for(int j = 0 ;j<arr.length-i-1;j++){
                //开始进行比较，如果arr[j]比arr[j+1]的值大，那就交换位置
                if(arr[j]>arr[j+1]){
                    int temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }

        }

选择排序：
    核心思想是 
        遍历，从0开始，记录当前索引(minIndex = ) ，然后从(i+1)开始选择出最小的数
        的索引，然后交换。

        动画表现形式，就是第一次遍历完数组后，最小的元素排在最前面，
                        第二次遍历完数组后，第二小的元素完成排序。


    function selectionSort(arr) {
        var len = arr.length;
        var minIndex, temp;
        for (var i = 0; i < len - 1; i++) {
            minIndex = i;
            for (var j = i + 1; j < len; j++) {
                if (arr[j] < arr[minIndex]) {     // 寻找最小的数
                    minIndex = j;                 // 将最小数的索引保存
                }
            }
            temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
        return arr;
    }




三路快排