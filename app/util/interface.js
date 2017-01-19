/**
 * Created by xudao on 17/1/4.
 */
const devDomain = 'http://www.mayfou.com';
const testDomain = 'http://www.mayfou.com';
const proDomain = 'http://www.mayfou.com';

const apiDomain = proDomain;

const apiArr = {
    getUser: '/index.php?g=interface&m=meifou&a=getUser&appver=40100&client=html5&pk=99D6B47A6034543318A73BD4ED0A017F&timestamp=1479461606&userid=1710718',
    getName: '/index.php?g=interface&m=meifou&a=getName&appver=40100&client=html5&pk=99D6B47A6034543318A73BD4ED0A017F&timestamp=1479461606&userid=1710718'
};

const returnData = {};

for (var i in apiArr) {
    returnData[i] = apiDomain + apiArr[i];
}

module.exports = returnData;
