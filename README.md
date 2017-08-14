<img src="https://github.com/daverau-optimizely/show_react/blob/master/icon.png" width="64" />

# Show React Chrome Extension

Add borders to any React component with the attribute `data-ui-component`.
Toggle between borders vs outlines, which don't affect the layout as much.

## Install:
1. [Download](https://github.com/daverau-optimizely/show_react/archive/master.zip) & unzip `show_react-master`
2. Open <a href="chrome://extensions/">Chrome Extensions (`chrome://extensions/`)</a> and `Load unpacked extension` using the folder above (you may need to enable `Developer Mode` on this page first!)
3. Visit [OUI](http://design.optimizely.com/docs/oui/latest/components/Button) React tabs or [app.optimizely.com](https://app.optimizely.com/)

## Demo:
<img src="https://github.com/daverau-optimizely/show_react/blob/master/example.gif" />

- **OUI components** have a hotpink solid border
- **App components** have a mediumpurple dotted border

**Note**: This doesn't work on other React sites because [React .15 made a change](https://facebook.github.io/react/blog/2016/04/07/react-v15.html) to remove automatically generated `data-reactid` attributes, and we had to add our own `data-oui-component` and `data-ui-component` to enable this highlighting.
