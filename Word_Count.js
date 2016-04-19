function countWords(str) {
  if(str === "")
  {
    return 0;
  }

  str = str.replace(/(^\s*)|(\s*$)/gi,"");
	str = str.replace(/[ ]{2,}/gi," ");
	str = str.replace(/\n /,"\n");
  str = str.replace(/\s+/g," ");
	return str.split(' ').length;
}
