function distanceBetweenPoints(x1,y1,x2,y2) {
    let disX=Math.abs(x1-x2);
    let disY=Math.abs(y1-y2);
    let dis=Math.sqrt(disX*disX+disY*disY);
    console.log(dis);
}
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985)