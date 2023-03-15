export const confirmFileDeletion = (itemName,inputValue,itemType) => {
    if(itemName == inputValue){
        return true;
    }else{
        return false;
    }
}