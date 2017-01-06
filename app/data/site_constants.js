const design_pages = {
  landing: 'designs/landing',
  demo: 'designs/demo',
  blog: 'designs/blog',
  tutorial: 'designs/tutorial',
};

var getName = function(str) {
    var slash = str.lastIndexOf('/') + 1;
    return str.slice(slash, str.length);
}

module.exports = {
    design_pages: design_pages,
    getName: getName
};
