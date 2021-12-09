// преобразовать данные:
const fs = require("fs");
const gzip = require("gzip-js");
const { contactsRaw } = require("../src/lib/data-expanded");

// Развернуть зависимости и почистить от лишнего:
function convertContactsIntoTree(contacts) {
  for (let contact of contacts) {
    linkUptoRoot(contact);
    contact.i = "person";
  }
  cleanupAndFillLinksRecursive(rootNodes);
  return rootNodes;
}

/**
 * Рекурсивно чистит подразделения и контакты от лишних записей.
 * Вычисляет для каждого узла ссылки mailto и tel (если у ноды есть email(ы) или телефон(ы))
 * @param {Array} list массив корневых элементов для отображения дерева
 */
function cleanupAndFillLinksRecursive(list) {
  let allChildEmails = [];
  for (let item of list) {
    for (let key in item) {
      if (
        !(
          key === "i" ||
          key === "c" ||
          key === "n" ||
          key === "k" ||
          key === "ph" ||
          key === "t" ||
          key === "e"
        )
      ) {
        delete item[key];
      }
    }
    // debugger;
    if (item.e && item.e.length) {
      allChildEmails.push(item.e[0].e);
      let mailto = "";
      for (let i = 0; i < Math.min(item.e.length, 10); i++) {
        mailto += item.e[i].e + ",";
      }
      item.mt = mailto.substr(0, mailto.length - 1);
    }
    if (item.ph && item.ph.length) {
      item.pt = item.ph[0].p;
    }
    if (item.c) {
      let childEmails = cleanupAndFillLinksRecursive(item.c);
      allChildEmails.concat(childEmails);
      if (childEmails && childEmails.length < 30) {
        item.gmt = childEmails.join();
      }
    }
  }
  return allChildEmails;
}

/**
 * Преобразовать строку. Если null или состоит из пробелов - вернется пустая строка. Иначе - оригинальная строка с удалёнными пробелами ии добавленным разделителем, который не встречается в критериях поиска - \
 * @param {String} str Входная строка
 */
function nullStringToEmpty(str) {
  if (str == null) {
    str = "";
  } else {
    str = str.trim();
  }
  return str.length ? str + "\\" : "";
}

function buildSearchTerm(node) {
  let result = nullStringToEmpty(node.n);
  result += nullStringToEmpty(node.sn);
  if (node.ph) {
    node.ph.forEach(el => {
      result += nullStringToEmpty(el.p);
    });
  }
  if (node.e) {
    node.e.forEach(el => {
      result += nullStringToEmpty(el.e);
    });
  }
  return result.toLowerCase();
}

let nodeKey = 1;
var rootNodes = [];

function linkUptoRoot(node) {
  if (!node || node.k) return;
  node.i = "group";
  node.n = node.n + (node.sn ? ` (${node.sn})` : "");
  node.k = nodeKey++;
  // Для оптимизации поиска сольём все поля, по которым осуществляется поиск, в одну строку:
  node.t = buildSearchTerm(node);
  let parent = node.p;
  if (parent) {
    if (!parent.c) {
      parent.c = [];
    }
    linkUptoRoot(parent);
    parent.c.push(node);
  } else {
    rootNodes.push(node);
  }
}

function prepareData() {
  const convertedContacts = convertContactsIntoTree(contactsRaw);

  const jsonData = JSON.stringify(convertedContacts);
  const zipData = new Uint8Array(gzip.zip(new TextEncoder().encode(jsonData)));
  for (let path of ["./public/data.json"]) {
    fs.writeFile(path, jsonData, err => {
      if (err) throw err;
    });

    fs.writeFile(path + ".gz", zipData, err => {
      if (err) throw err;
    });
  }
}
prepareData();

module.exports = prepareData;