webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/ui/Header.js":
/*!**************************!*\
  !*** ./src/ui/Header.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/useScrollTrigger */ "./node_modules/@material-ui/core/esm/useScrollTrigger/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Link */ "./src/ui/Link.js");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/MenuList */ "./node_modules/@material-ui/core/esm/MenuList/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/index.js");
/* harmony import */ var _material_ui_core_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/SwipeableDrawer */ "./node_modules/@material-ui/core/esm/SwipeableDrawer/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/esm/Hidden/index.js");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/esm/ClickAwayListener/index.js");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Grow */ "./node_modules/@material-ui/core/esm/Grow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/esm/Popper/index.js");


var _jsxFileName = "/Users/zacharyreece/Documents/Arc/Projects/Arc Website/arcdevelopment/src/ui/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



























function ElevationScroll(props) {
  var children = props.children;
  var trigger = Object(_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_7__["default"])({
    disableHysteresis: true,
    threshold: 0
  });
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  var _objectSpread2, _logo;

  return {
    toolbarMargin: _objectSpread({}, theme.mixins.toolbar, (_objectSpread2 = {
      marginBottom: "3em"
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, theme.breakpoints.down("md"), {
      marginBottom: "2em"
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, theme.breakpoints.down("xs"), {
      marginBottom: "1.25em"
    }), _objectSpread2)),
    logo: (_logo = {
      height: "8em",
      textTransform: "none"
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_logo, theme.breakpoints.down("md"), {
      height: "7em"
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_logo, theme.breakpoints.down("xs"), {
      height: "5.5em"
    }), _logo),
    logoContainer: {
      padding: 0,
      "&:hover": {
        backgroundColor: "transparent"
      }
    },
    tabContainer: {
      marginLeft: "auto"
    },
    tab: _objectSpread({}, theme.typography.tab, {
      minWidth: 10,
      marginLeft: "25px"
    }),
    button: _objectSpread({}, theme.typography.estimate, {
      borderRadius: "50px",
      marginLeft: "50px",
      marginRight: "25px",
      height: "45px",
      "&:hover": {
        backgroundColor: theme.palette.secondary.light
      }
    }),
    menu: {
      backgroundColor: theme.palette.common.blue,
      color: "white",
      borderRadius: "0px"
    },
    menuItem: _objectSpread({}, theme.typography.tab, {
      opacity: 0.7,
      "&:hover": {
        opacity: 1
      }
    }),
    drawerIcon: {
      height: "50px",
      width: "50px"
    },
    drawerIconContainer: {
      marginLeft: "auto",
      "&:hover": {
        backgroundColor: "transparent"
      }
    },
    drawer: {
      backgroundColor: theme.palette.common.blue
    },
    drawerItem: _objectSpread({}, theme.typography.tab, {
      color: "white",
      opacity: 0.7
    }),
    drawerItemEstimate: {
      backgroundColor: theme.palette.common.orange
    },
    drawerItemSelected: {
      "& .MuiListItemText-root": {
        opacity: 1
      }
    },
    appbar: {
      zIndex: theme.zIndex.modal + 1
    }
  };
});
function Header(props) {
  var _this = this;

  var classes = useStyles();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["useTheme"])();
  var iOS =  true && /iPad|iPhone|iPod/.test(navigator.userAgent);
  var matches = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_15__["default"])(theme.breakpoints.down("md"));

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      openDrawer = _useState[0],
      setOpenDrawer = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      openMenu = _useState3[0],
      setOpenMenu = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      previousURL = _useState4[0],
      setPreviousURL = _useState4[1];

  var handleChange = function handleChange(e, newValue) {
    props.setValue(newValue);
  };

  var handleClick = function handleClick(e) {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  var handleMenuItemClick = function handleMenuItemClick(e, i) {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  };

  var handleClose = function handleClose(e) {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  var menuOptions = [{
    name: "Custom Software Development",
    link: "/customsoftware",
    activeIndex: 1,
    selectedIndex: 0
  }, {
    name: "iOS/Android App Development",
    link: "/mobileapps",
    activeIndex: 1,
    selectedIndex: 1
  }, {
    name: "Website Development",
    link: "/websites",
    activeIndex: 1,
    selectedIndex: 2
  }];
  var routes = [{
    name: "Home",
    link: "/",
    activeIndex: 0
  }, {
    name: "Services",
    link: "/services",
    activeIndex: 1,
    ariaOwns: anchorEl ? "simple-menu" : undefined,
    ariaPopup: anchorEl ? "true" : undefined,
    mouseOver: function mouseOver(event) {
      return handleClick(event);
    }
  }, {
    name: "The Revolution",
    link: "/revolution",
    activeIndex: 2
  }, {
    name: "About Us",
    link: "/about",
    activeIndex: 3
  }, {
    name: "Contact Us",
    link: "/contact",
    activeIndex: 4
  }];
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (window.location.pathname !== previousURL) {
      react_ga__WEBPACK_IMPORTED_MODULE_4__["default"].pageview(window.location.pathname + window.location.search);
      setPreviousURL(window.location.pathname);
    }

    [].concat(menuOptions, routes).forEach(function (route) {
      switch (window.location.pathname) {
        case "".concat(route.link):
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);

            if (route.selectedIndex && route.selectedIndex !== props.selectedIndex) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }

          break;

        case "/estimate":
          if (props.value !== false) {
            props.setValue(false);
          }

          break;

        default:
          break;
      }
    });
  }, [props.value, menuOptions, props.selectedIndex, routes, props]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 5
    }
  }, __jsx(ElevationScroll, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    position: "fixed",
    className: classes.appbar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    disableGutters: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    component: _Link__WEBPACK_IMPORTED_MODULE_12__["default"],
    href: "/",
    disableRipple: true,
    onClick: function onClick() {
      return props.setValue(0);
    },
    className: classes.logoContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 13
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "336961029",
    __self: this
  }, "body{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96YWNoYXJ5cmVlY2UvRG9jdW1lbnRzL0FyYy9Qcm9qZWN0cy9BcmMgV2Vic2l0ZS9hcmNkZXZlbG9wbWVudC9zcmMvdWkvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRPaUMsQUFHNEIsU0FDWCIsImZpbGUiOiIvVXNlcnMvemFjaGFyeXJlZWNlL0RvY3VtZW50cy9BcmMvUHJvamVjdHMvQXJjIFdlYnNpdGUvYXJjZGV2ZWxvcG1lbnQvc3JjL3VpL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RHQSBmcm9tIFwicmVhY3QtZ2FcIjtcbmltcG9ydCBBcHBCYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIjtcbmltcG9ydCB1c2VTY3JvbGxUcmlnZ2VyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VTY3JvbGxUcmlnZ2VyXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IFRhYnMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYnNcIjtcbmltcG9ydCBUYWIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYlwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9MaW5rXCI7XG5pbXBvcnQgTWVudUxpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVMaXN0XCI7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCI7XG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeVwiO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgU3dpcGVhYmxlRHJhd2VyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Td2lwZWFibGVEcmF3ZXJcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XG5pbXBvcnQgTWVudUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCI7XG5pbXBvcnQgSGlkZGVuIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIjtcbmltcG9ydCBDbGlja0F3YXlMaXN0ZW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2xpY2tBd2F5TGlzdGVuZXJcIjtcbmltcG9ydCBHcm93IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Hcm93XCI7XG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XG5pbXBvcnQgUG9wcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXJcIjtcblxuZnVuY3Rpb24gRWxldmF0aW9uU2Nyb2xsKHByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gIGNvbnN0IHRyaWdnZXIgPSB1c2VTY3JvbGxUcmlnZ2VyKHtcbiAgICBkaXNhYmxlSHlzdGVyZXNpczogdHJ1ZSxcbiAgICB0aHJlc2hvbGQ6IDBcbiAgfSk7XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgIGVsZXZhdGlvbjogdHJpZ2dlciA/IDQgOiAwXG4gIH0pO1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHRvb2xiYXJNYXJnaW46IHtcbiAgICAuLi50aGVtZS5taXhpbnMudG9vbGJhcixcbiAgICBtYXJnaW5Cb3R0b206IFwiM2VtXCIsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogXCIyZW1cIlxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogXCIxLjI1ZW1cIlxuICAgIH1cbiAgfSxcbiAgbG9nbzoge1xuICAgIGhlaWdodDogXCI4ZW1cIixcbiAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIixcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xuICAgICAgaGVpZ2h0OiBcIjdlbVwiXG4gICAgfSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInhzXCIpXToge1xuICAgICAgaGVpZ2h0OiBcIjUuNWVtXCJcbiAgICB9XG4gIH0sXG4gIGxvZ29Db250YWluZXI6IHtcbiAgICBwYWRkaW5nOiAwLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICAgIH1cbiAgfSxcbiAgdGFiQ29udGFpbmVyOiB7XG4gICAgbWFyZ2luTGVmdDogXCJhdXRvXCJcbiAgfSxcbiAgdGFiOiB7XG4gICAgLi4udGhlbWUudHlwb2dyYXBoeS50YWIsXG4gICAgbWluV2lkdGg6IDEwLFxuICAgIG1hcmdpbkxlZnQ6IFwiMjVweFwiXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIC4uLnRoZW1lLnR5cG9ncmFwaHkuZXN0aW1hdGUsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjUwcHhcIixcbiAgICBtYXJnaW5MZWZ0OiBcIjUwcHhcIixcbiAgICBtYXJnaW5SaWdodDogXCIyNXB4XCIsXG4gICAgaGVpZ2h0OiBcIjQ1cHhcIixcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5saWdodFxuICAgIH1cbiAgfSxcbiAgbWVudToge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24uYmx1ZSxcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIGJvcmRlclJhZGl1czogXCIwcHhcIlxuICB9LFxuICBtZW51SXRlbToge1xuICAgIC4uLnRoZW1lLnR5cG9ncmFwaHkudGFiLFxuICAgIG9wYWNpdHk6IDAuNyxcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgb3BhY2l0eTogMVxuICAgIH1cbiAgfSxcbiAgZHJhd2VySWNvbjoge1xuICAgIGhlaWdodDogXCI1MHB4XCIsXG4gICAgd2lkdGg6IFwiNTBweFwiXG4gIH0sXG4gIGRyYXdlckljb25Db250YWluZXI6IHtcbiAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgICB9XG4gIH0sXG4gIGRyYXdlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24uYmx1ZVxuICB9LFxuICBkcmF3ZXJJdGVtOiB7XG4gICAgLi4udGhlbWUudHlwb2dyYXBoeS50YWIsXG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICBvcGFjaXR5OiAwLjdcbiAgfSxcbiAgZHJhd2VySXRlbUVzdGltYXRlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5vcmFuZ2VcbiAgfSxcbiAgZHJhd2VySXRlbVNlbGVjdGVkOiB7XG4gICAgXCImIC5NdWlMaXN0SXRlbVRleHQtcm9vdFwiOiB7XG4gICAgICBvcGFjaXR5OiAxXG4gICAgfVxuICB9LFxuICBhcHBiYXI6IHtcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5tb2RhbCArIDFcbiAgfVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGlPUyA9IHByb2Nlc3MuYnJvd3NlciAmJiAvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgY29uc3QgbWF0Y2hlcyA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpKTtcblxuICBjb25zdCBbb3BlbkRyYXdlciwgc2V0T3BlbkRyYXdlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtvcGVuTWVudSwgc2V0T3Blbk1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcHJldmlvdXNVUkwsIHNldFByZXZpb3VzVVJMXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlLCBuZXdWYWx1ZSkgPT4ge1xuICAgIHByb3BzLnNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IGUgPT4ge1xuICAgIHNldEFuY2hvckVsKGUuY3VycmVudFRhcmdldCk7XG4gICAgc2V0T3Blbk1lbnUodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTWVudUl0ZW1DbGljayA9IChlLCBpKSA9PiB7XG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XG4gICAgc2V0T3Blbk1lbnUoZmFsc2UpO1xuICAgIHByb3BzLnNldFNlbGVjdGVkSW5kZXgoaSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSBlID0+IHtcbiAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgICBzZXRPcGVuTWVudShmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgbWVudU9wdGlvbnMgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJDdXN0b20gU29mdHdhcmUgRGV2ZWxvcG1lbnRcIixcbiAgICAgIGxpbms6IFwiL2N1c3RvbXNvZnR3YXJlXCIsXG4gICAgICBhY3RpdmVJbmRleDogMSxcbiAgICAgIHNlbGVjdGVkSW5kZXg6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiaU9TL0FuZHJvaWQgQXBwIERldmVsb3BtZW50XCIsXG4gICAgICBsaW5rOiBcIi9tb2JpbGVhcHBzXCIsXG4gICAgICBhY3RpdmVJbmRleDogMSxcbiAgICAgIHNlbGVjdGVkSW5kZXg6IDFcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiV2Vic2l0ZSBEZXZlbG9wbWVudFwiLFxuICAgICAgbGluazogXCIvd2Vic2l0ZXNcIixcbiAgICAgIGFjdGl2ZUluZGV4OiAxLFxuICAgICAgc2VsZWN0ZWRJbmRleDogMlxuICAgIH1cbiAgXTtcblxuICBjb25zdCByb3V0ZXMgPSBbXG4gICAgeyBuYW1lOiBcIkhvbWVcIiwgbGluazogXCIvXCIsIGFjdGl2ZUluZGV4OiAwIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJTZXJ2aWNlc1wiLFxuICAgICAgbGluazogXCIvc2VydmljZXNcIixcbiAgICAgIGFjdGl2ZUluZGV4OiAxLFxuICAgICAgYXJpYU93bnM6IGFuY2hvckVsID8gXCJzaW1wbGUtbWVudVwiIDogdW5kZWZpbmVkLFxuICAgICAgYXJpYVBvcHVwOiBhbmNob3JFbCA/IFwidHJ1ZVwiIDogdW5kZWZpbmVkLFxuICAgICAgbW91c2VPdmVyOiBldmVudCA9PiBoYW5kbGVDbGljayhldmVudClcbiAgICB9LFxuICAgIHsgbmFtZTogXCJUaGUgUmV2b2x1dGlvblwiLCBsaW5rOiBcIi9yZXZvbHV0aW9uXCIsIGFjdGl2ZUluZGV4OiAyIH0sXG4gICAgeyBuYW1lOiBcIkFib3V0IFVzXCIsIGxpbms6IFwiL2Fib3V0XCIsIGFjdGl2ZUluZGV4OiAzIH0sXG4gICAgeyBuYW1lOiBcIkNvbnRhY3QgVXNcIiwgbGluazogXCIvY29udGFjdFwiLCBhY3RpdmVJbmRleDogNCB9XG4gIF07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICE9PSBwcmV2aW91c1VSTCkge1xuICAgICAgUmVhY3RHQS5wYWdldmlldyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICAgIHNldFByZXZpb3VzVVJMKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgfVxuXG4gICAgWy4uLm1lbnVPcHRpb25zLCAuLi5yb3V0ZXNdLmZvckVhY2gocm91dGUgPT4ge1xuICAgICAgc3dpdGNoICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgICAgY2FzZSBgJHtyb3V0ZS5saW5rfWA6XG4gICAgICAgICAgaWYgKHByb3BzLnZhbHVlICE9PSByb3V0ZS5hY3RpdmVJbmRleCkge1xuICAgICAgICAgICAgcHJvcHMuc2V0VmFsdWUocm91dGUuYWN0aXZlSW5kZXgpO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICByb3V0ZS5zZWxlY3RlZEluZGV4ICYmXG4gICAgICAgICAgICAgIHJvdXRlLnNlbGVjdGVkSW5kZXggIT09IHByb3BzLnNlbGVjdGVkSW5kZXhcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBwcm9wcy5zZXRTZWxlY3RlZEluZGV4KHJvdXRlLnNlbGVjdGVkSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIi9lc3RpbWF0ZVwiOlxuICAgICAgICAgIGlmIChwcm9wcy52YWx1ZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHByb3BzLnNldFZhbHVlKGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtwcm9wcy52YWx1ZSwgbWVudU9wdGlvbnMsIHByb3BzLnNlbGVjdGVkSW5kZXgsIHJvdXRlcywgcHJvcHNdKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxFbGV2YXRpb25TY3JvbGw+XG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJmaXhlZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBiYXJ9PlxuICAgICAgICAgIDxUb29sYmFyIGRpc2FibGVHdXR0ZXJzPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XG4gICAgICAgICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZXRWYWx1ZSgwKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29Db250YWluZXJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubG9nb31cbiAgICAgICAgICAgICAgICBpZD1cIkxheWVyXzFcIlxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDgwIDEzOVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3R5bGU+e2Auc3Qwe2ZpbGw6bm9uZX0uc3Qxe2ZpbGw6I2ZmZn0uc3Qye2ZvbnQtZmFtaWx5OlJhbGV3YXk7IGZvbnQtd2VpZ2h0OiAzMDB9LnN0NntmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7IHN0cm9rZS13aWR0aDozOyBzdHJva2UtbWl0ZXJsaW1pdDoxMH1gfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk00NDguMDctMWwtOS42MiAxNy4yNC04LjM2IDE0Ljk2TDM2OS45MyAxMzlILTFWLTF6XCIgLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJzdDBcIiBkPVwiTS0xIDEzOWg0NzkuOTJ2LjAxSC0xelwiIC8+XG4gICAgICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyNjEuOTk0IDY1LjIzMylcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3QxIHN0MlwiXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjU3XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBBcmNcbiAgICAgICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNy42OTIgMTEyLjAxNSlcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3QxIHN0MlwiXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjU0XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBEZXZlbG9wbWVudFxuICAgICAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3QwXCJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMzgyLjQ0IDExNi40M2w0Ny42NS04NS4yMyA4LjM2LTE0Ljk2TTM2OS44MyAxMzlsLS4wMS4wMUwzNjIgMTUzXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBkPVwiTTQzOC43NiAxNS43NmwtNTYuNDIgMTAwLjkxYy0xMi41Mi0xMC44My0yMC40NS0yNi44Mi0yMC40NS00NC42NyAwLTMyLjU4IDI2LjQyLTU5IDU5LTU5IDYuMjMgMCAxMi4yNC45NyAxNy44NyAyLjc2elwiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiIzBiNzJiOVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQ3OS44OSA3MmMwIDMyLjU4LTI2LjQyIDU5LTU5IDU5LTE0LjczIDAtMjguMjEtNS40LTM4LjU1LTE0LjMzbDU2LjQyLTEwMC45MWMyMy44NSA3LjU3IDQxLjEzIDI5Ljg5IDQxLjEzIDU2LjI0elwiIC8+XG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJHcm91cF8xODZcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzAuMTUzIDExLjQxMylcIj5cbiAgICAgICAgICAgICAgICAgIDxnIGlkPVwiR3JvdXBfMTg1XCI+XG4gICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiV29yZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJQYXRoXzU5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0MVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTQwNS4wNSAxNC40bC0uMDkgODAuMzgtNy42Ny0uMDEuMDYtNTIuMjUtMjkuNCA1Mi4yMS03Ljk0LS4wMSA0NS4wNC04MC4zMnpcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0MFwiXG4gICAgICAgICAgICAgICAgICBkPVwiTTQ1Ny0xN2wtOC45MyAxNi05LjYyIDE3LjI0LTguMzYgMTQuOTZMMzY5LjkzIDEzOWwtLjAxLjAxTDM2MSAxNTVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8SGlkZGVuIG1kRG93bj5cbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYkNvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICAgIGluZGljYXRvckNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3JvdXRlcy5tYXAoKHJvdXRlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8VGFiXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtyb3V0ZX0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYn1cbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17cm91dGUubGlua31cbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17cm91dGUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLW93bnM9e3JvdXRlLmFyaWFPd25zfVxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9e3JvdXRlLmFyaWFQb3B1cH1cbiAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17cm91dGUubW91c2VPdmVyfVxuICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0T3Blbk1lbnUoZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvZXN0aW1hdGVcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5zZXRWYWx1ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIFJlYWN0R0EuZXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIkVzdGltYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcIkhlYWRlciBEZXNrdG9wIFByZXNzZWRcIlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgRnJlZSBFc3RpbWF0ZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxQb3BwZXJcbiAgICAgICAgICAgICAgICAgIG9wZW49e29wZW5NZW51fVxuICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17eyByb290OiBjbGFzc2VzLm1lbnUgfX1cbiAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgICAgICAgICAgICAgIHJvbGU9e3VuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVQb3J0YWxcbiAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbS1zdGFydFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgeyh7IFRyYW5zaXRpb25Qcm9wcywgcGxhY2VtZW50IH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEdyb3dcbiAgICAgICAgICAgICAgICAgICAgICB7Li4uVHJhbnNpdGlvblByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybU9yaWdpbjogXCJ0b3AgbGVmdFwiIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXswfSBzdHlsZT17eyB6SW5kZXg6IDEzMDIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2xpY2tBd2F5TGlzdGVuZXIgb25DbGlja0F3YXk9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVBhZGRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZUNsb3NlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiBzZXRPcGVuTWVudSh0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1lbnUtbGlzdC1ncm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZW51T3B0aW9ucy5tYXAoKG9wdGlvbiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7b3B0aW9ufSR7aX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e29wdGlvbi5saW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7IHJvb3Q6IGNsYXNzZXMubWVudUl0ZW0gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU1lbnVJdGVtQ2xpY2soZXZlbnQsIGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnNldFZhbHVlKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID09PSBwcm9wcy5zZWxlY3RlZEluZGV4ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMudmFsdWUgPT09IDEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgIT09IFwiL3NlcnZpY2VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVMaXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DbGlja0F3YXlMaXN0ZW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICAgICAgICA8L0dyb3c+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvUG9wcGVyPlxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgICAgICA8SGlkZGVuIGxnVXA+XG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8U3dpcGVhYmxlRHJhd2VyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlQmFja2Ryb3BUcmFuc2l0aW9uPXshaU9TfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZURpc2NvdmVyeT17aU9TfVxuICAgICAgICAgICAgICAgICAgb3Blbj17b3BlbkRyYXdlcn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE9wZW5EcmF3ZXIoZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgb25PcGVuPXsoKSA9PiBzZXRPcGVuRHJhd2VyKHRydWUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17eyBwYXBlcjogY2xhc3Nlcy5kcmF3ZXIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyTWFyZ2lufSAvPlxuICAgICAgICAgICAgICAgICAgPExpc3QgZGlzYWJsZVBhZGRpbmc+XG4gICAgICAgICAgICAgICAgICAgIHtyb3V0ZXMubWFwKHJvdXRlID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdmlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7cm91dGV9JHtyb3V0ZS5hY3RpdmVJbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtyb3V0ZS5saW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3Byb3BzLnZhbHVlID09PSByb3V0ZS5hY3RpdmVJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3sgc2VsZWN0ZWQ6IGNsYXNzZXMuZHJhd2VySXRlbVNlbGVjdGVkIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldE9wZW5EcmF3ZXIoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5zZXRWYWx1ZShyb3V0ZS5hY3RpdmVJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckl0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3V0ZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbVRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE9wZW5EcmF3ZXIoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuc2V0VmFsdWUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3RHQS5ldmVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIkVzdGltYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJIZWFkZXIgTW9iaWxlIFByZXNzZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBkaXZpZGVyXG4gICAgICAgICAgICAgICAgICAgICAgYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMuZHJhd2VySXRlbUVzdGltYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGNsYXNzZXMuZHJhd2VySXRlbVNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL2VzdGltYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17cHJvcHMudmFsdWUgPT09IDV9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgRnJlZSBFc3RpbWF0ZVxuICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgIDwvU3dpcGVhYmxlRHJhd2VyPlxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySWNvbkNvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5EcmF3ZXIoIW9wZW5EcmF3ZXIpfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxNZW51SWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySWNvbn0gLz5cbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8L0hpZGRlbj5cbiAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgIDwvQXBwQmFyPlxuICAgICAgPC9FbGV2YXRpb25TY3JvbGw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyTWFyZ2lufSAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/zacharyreece/Documents/Arc/Projects/Arc Website/arcdevelopment/src/ui/Header.js */"), __jsx("svg", {
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 480 139",
    className: "jsx-336961029" + " " + (classes.logo || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 15
    }
  }, __jsx("style", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 17
    }
  }, ".st0{fill:none}.st1{fill:#fff}.st2{font-family:Raleway; font-weight: 300}.st6{fill:none;stroke:#000; stroke-width:3; stroke-miterlimit:10}"), __jsx("path", {
    d: "M448.07-1l-9.62 17.24-8.36 14.96L369.93 139H-1V-1z",
    className: "jsx-336961029",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 17
    }
  }), __jsx("path", {
    d: "M-1 139h479.92v.01H-1z",
    className: "jsx-336961029" + " " + "st0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 17
    }
  }), __jsx("text", {
    transform: "translate(261.994 65.233)",
    fontSize: "57",
    className: "jsx-336961029" + " " + "st1 st2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 17
    }
  }, "Arc"), __jsx("text", {
    transform: "translate(17.692 112.015)",
    fontSize: "54",
    className: "jsx-336961029" + " " + "st1 st2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 17
    }
  }, "Development"), __jsx("path", {
    d: "M382.44 116.43l47.65-85.23 8.36-14.96M369.83 139l-.01.01L362 153",
    className: "jsx-336961029" + " " + "st0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 17
    }
  }), __jsx("path", {
    d: "M438.76 15.76l-56.42 100.91c-12.52-10.83-20.45-26.82-20.45-44.67 0-32.58 26.42-59 59-59 6.23 0 12.24.97 17.87 2.76z",
    fill: "#0b72b9",
    className: "jsx-336961029",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 17
    }
  }), __jsx("path", {
    d: "M479.89 72c0 32.58-26.42 59-59 59-14.73 0-28.21-5.4-38.55-14.33l56.42-100.91c23.85 7.57 41.13 29.89 41.13 56.24z",
    className: "jsx-336961029",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 17
    }
  }), __jsx("g", {
    id: "Group_186",
    transform: "translate(30.153 11.413)",
    className: "jsx-336961029",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 17
    }
  }, __jsx("g", {
    id: "Group_185",
    className: "jsx-336961029",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 19
    }
  }, __jsx("g", {
    id: "Words",
    className: "jsx-336961029",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 21
    }
  }, __jsx("path", {
    id: "Path_59",
    d: "M405.05 14.4l-.09 80.38-7.67-.01.06-52.25-29.4 52.21-7.94-.01 45.04-80.32z",
    className: "jsx-336961029" + " " + "st1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 23
    }
  })))), __jsx("path", {
    d: "M457-17l-8.93 16-9.62 17.24-8.36 14.96L369.93 139l-.01.01L361 155",
    className: "jsx-336961029" + " " + "st0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 17
    }
  }))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_22__["default"], {
    mdDown: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 13
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: props.value,
    onChange: handleChange,
    className: classes.tabContainer,
    indicatorColor: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 17
    }
  }, routes.map(function (route, index) {
    return __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: "".concat(route).concat(index),
      className: classes.tab,
      component: _Link__WEBPACK_IMPORTED_MODULE_12__["default"],
      href: route.link,
      label: route.name,
      "aria-owns": route.ariaOwns,
      "aria-haspopup": route.ariaPopup,
      onMouseOver: route.mouseOver,
      onMouseLeave: function onMouseLeave() {
        return setOpenMenu(false);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 21
      }
    });
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    component: _Link__WEBPACK_IMPORTED_MODULE_12__["default"],
    href: "/estimate",
    variant: "contained",
    color: "secondary",
    className: classes.button,
    onClick: function onClick() {
      props.setValue(false);
      react_ga__WEBPACK_IMPORTED_MODULE_4__["default"].event({
        category: "Estimate",
        action: "Header Desktop Pressed"
      });
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 17
    }
  }, "Free Estimate"), __jsx(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_26__["default"], {
    open: openMenu,
    classes: {
      root: classes.menu
    },
    anchorEl: anchorEl,
    role: undefined,
    transition: true,
    disablePortal: true,
    placement: "bottom-start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 17
    }
  }, function (_ref) {
    var TransitionProps = _ref.TransitionProps,
        placement = _ref.placement;
    return __jsx(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_24__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, TransitionProps, {
      style: {
        transformOrigin: "top left"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_25__["default"], {
      elevation: 0,
      style: {
        zIndex: 1302
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 23
      }
    }, __jsx(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_23__["default"], {
      onClickAway: handleClose,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_13__["default"], {
      disablePadding: true,
      onMouseLeave: handleClose,
      onMouseOver: function onMouseOver() {
        return setOpenMenu(true);
      },
      id: "menu-list-grow",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345,
        columnNumber: 27
      }
    }, menuOptions.map(function (option, i) {
      return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
        key: "".concat(option).concat(i),
        component: _Link__WEBPACK_IMPORTED_MODULE_12__["default"],
        href: option.link,
        classes: {
          root: classes.menuItem
        },
        onClick: function onClick(event) {
          handleMenuItemClick(event, i);
          props.setValue(1);
          handleClose();
        },
        selected: i === props.selectedIndex && props.value === 1 && window.location.pathname !== "/services",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 31
        }
      }, option.name);
    })))));
  }))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_22__["default"], {
    lgUp: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 13
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_16__["default"], {
    disableBackdropTransition: !iOS,
    disableDiscovery: iOS,
    open: openDrawer,
    onClose: function onClose() {
      return setOpenDrawer(false);
    },
    onOpen: function onOpen() {
      return setOpenDrawer(true);
    },
    classes: {
      paper: classes.drawer
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classes.toolbarMargin,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 19
    }
  }), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_19__["default"], {
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 19
    }
  }, routes.map(function (route) {
    return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_20__["default"], {
      divider: true,
      key: "".concat(route).concat(route.activeIndex),
      button: true,
      component: _Link__WEBPACK_IMPORTED_MODULE_12__["default"],
      href: route.link,
      selected: props.value === route.activeIndex,
      classes: {
        selected: classes.drawerItemSelected
      },
      onClick: function onClick() {
        setOpenDrawer(false);
        props.setValue(route.activeIndex);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392,
        columnNumber: 23
      }
    }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_21__["default"], {
      className: classes.drawerItem,
      disableTypography: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405,
        columnNumber: 25
      }
    }, route.name));
  }), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_20__["default"], {
    onClick: function onClick() {
      setOpenDrawer(false);
      props.setValue(false);
      react_ga__WEBPACK_IMPORTED_MODULE_4__["default"].event({
        category: "Estimate",
        action: "Header Mobile Pressed"
      });
    },
    divider: true,
    button: true,
    component: _Link__WEBPACK_IMPORTED_MODULE_12__["default"],
    classes: {
      root: classes.drawerItemEstimate,
      selected: classes.drawerItemSelected
    },
    href: "/estimate",
    selected: props.value === 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_21__["default"], {
    className: classes.drawerItem,
    disableTypography: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 23
    }
  }, "Free Estimate")))), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
    className: classes.drawerIconContainer,
    onClick: function onClick() {
      return setOpenDrawer(!openDrawer);
    },
    disableRipple: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_18___default.a, {
    className: classes.drawerIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 19
    }
  }))))))), __jsx("div", {
    className: classes.toolbarMargin,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=_app.js.f3dcfe8f35e777a8dade.hot-update.js.map