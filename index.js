function composeStyles(styleName, styles) {
	var selectedStyles = [];
	for (var name in styleName) {
		if (styleName.hasOwnProperty(name)) {
			if (styleName[name]) {
				selectedStyles.push(styles[name]);
			}
		}
	}
	return selectedStyles;
}
module.exports = composeStyles;
