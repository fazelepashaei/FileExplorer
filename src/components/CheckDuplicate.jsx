// کامپوننت DuplicateChecker برای بررسی تکراری بودن نام
const DuplicateChecker = {
    checkDuplicate: (items, itemName) => {
        for (let item of items) {
            if (item.name === itemName) {
                return true;
            }
            if (item.children && DuplicateChecker.checkDuplicate(item.children, itemName)) {
                return true;
            }
        }
        return false;
    }
};

export default DuplicateChecker;
