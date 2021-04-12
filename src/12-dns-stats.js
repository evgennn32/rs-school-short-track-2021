/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function removeFirstPart (domain) {
  const arr = domain.split('.');
  arr.splice(0, 1);
  return arr.join('.');
}
function findDomains (domains, dns) {
  let res = 0;
  domains.forEach((el) => {
    if (el.indexOf(dns) !== -1) {
      res++;
    }
  });
  return res;
}
function getDNSStats(domains) {
  const dnsObj = {};
  domains.forEach((domain) => {
    let tempDomain = domain;
    for (let i = 0; i <= (domain.split('.').length - 1); i++) {
      if (i !== 0) {
        tempDomain = removeFirstPart(tempDomain);
      }
      if (tempDomain) {
        const count = findDomains(domains, tempDomain);
        if (+count > 0) {
          dnsObj[`.${tempDomain.split('.').reverse().join('.')}`] = count;
        }
      }
    }
  });

  return dnsObj;
}

module.exports = getDNSStats;
