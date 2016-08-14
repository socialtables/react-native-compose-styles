# react-native-compose-styles


### how to use
`npm install react-native-compose-styles`


```js
var composeStyles = require('react-native-compose-styles');
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

var composedStyles = composeStyles({
	container: true,
	button: false,
	title: false
}, styles);
```

### Thanks
Thank you to my wonderful colleague <a href="https://github.com/conorhastings">Conor Hastings</a> for the inspiration behind this project.


### License
Copyright (C) 2016 Social Tables, Inc. (https://www.socialtables.com) All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
