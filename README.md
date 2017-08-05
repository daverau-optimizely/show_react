<img src="https://github.com/daverau-optimizely/show_react/blob/master/icon.png" width="64" />

# Show React Chrome Extension

Add borders to any React component with the attribute `data-ui-component`.
Toggle between borders vs outlines, which don't affect the layout as much.

<img src="https://github.com/daverau-optimizely/show_react/blob/master/example.gif" />

- **OUI components** have a hotpink solid border
- **App components** have a mediumpurple dotted border

## Install:
1. Download [Show React Chrome Extension (.zip)](https://github.com/daverau-optimizely/show_react/archive/master.zip)
2. Extract the .zip (which creates a folder `show_react-master`)
3. Open [Chrome Extensions](chrome://extensions/) and check/enable `Developer Mode`
4. Click `Load unpacked extension` and point to the extracted folder
5. Toggle react highlighting for [OUI](http://design.optimizely.com/docs/oui/latest/components/Button) and Optimizely react components only

**Note**: Since [React .15 made a change](https://facebook.github.io/react/blog/2016/04/07/react-v15.html) to remove the automatically generated `data-reactid` attribute we had to add our own `data-oui-component` and `data-ui-component` to enable this highlighting, so don't expect this to work on any other newer React websites.
