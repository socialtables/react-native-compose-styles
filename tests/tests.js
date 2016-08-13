var composeStyles = require("../index.js");
var test = require("tape");

var styles = {
	container: {
		flex: 1,
		flexDirection: "row"
	},
	button: {
		height: 20,
		width: 30
	},
	title: {
		fontWeight: 300,
		fontSize: 12,
		color: "white"
	}
};

test("compose styles", function(t) {
	var composedStyles = composeStyles({
		container: true,
		button: false,
		title: true
	}, styles);

	t.equal(composedStyles.length, 2);
	t.equal(composedStyles[0], styles.container);
	t.equal(composedStyles[1], styles.title);
	t.end();
});


test("compose styles without style", function(t) {
	var composedStyles = composeStyles({
		button: true,
		noexist: true
	}, styles);

	t.equal(composedStyles.length, 1);
	t.equal(composedStyles[0], styles.button);
	t.end();
});
