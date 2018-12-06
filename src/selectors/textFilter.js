// text reducer
export default (text, len) => {
    if(text.length > len + 3){
        let textReduced = text.substring(0,len)
        return textReduced + '...';
    }else{
        return text
    }
}