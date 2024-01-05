//logic for homepage

exports.homepage = async (req, res) => {
   res.render('./layouts/index.ejs');
}

//logic for about page
exports.about = async (req, res) => {
  res.render("./layouts/about.ejs");
};