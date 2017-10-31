class BinarySreachTree {
    var root = null;
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    var insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            // 在节点左边
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            // 右边，大于等于
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    };

    insert (key) {
        if (typeof key !== 'number') {
            return;
        }
        var newNode = new Node(key);
        if (!root) {
            // 没有根节点，赋值给根节点
            root = newNode;
            return;
        }
        // 插入节点
        insertNode(root, newNode);
    };
};