;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    107: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(380),
        lodash_get__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__)
      __webpack_exports__.a = function(TABLE) {
        return function(key) {
          return lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(TABLE, key)
        }
      }
    },
    110: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),
        _styles_Elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25),
        DeleteButton = function(props) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _styles_Elements__WEBPACK_IMPORTED_MODULE_1__.f,
            props,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _styles_Elements__WEBPACK_IMPORTED_MODULE_1__.e,
              null,
              '✖'
            )
          )
        }
      ;(__webpack_exports__.a = DeleteButton),
        (DeleteButton.__docgenInfo = {description: '', methods: [], displayName: 'DeleteButton'}),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/widgets/DeleteButton.js'] = {
            name: 'DeleteButton',
            docgenInfo: DeleteButton.__docgenInfo,
            path: 'src/widgets/DeleteButton.js'
          })
    },
    131: function(module) {
      module.exports = {
        lanes: [
          {
            id: 'SORTED_LANE',
            title: 'Sorted Lane',
            label: '20/70',
            cards: [
              {
                id: 'Card1',
                title: 'Buy milk',
                label: '2017-12-01',
                description: '2 Gallons of milk at the Deli store',
                metadata: {completedAt: '2017-12-01T10:00:00Z', shortCode: 'abc'}
              },
              {
                id: 'Card2',
                title: 'Dispose Garbage',
                label: '2017-11-01',
                description: 'Sort out recyclable and waste as needed',
                metadata: {completedAt: '2017-11-01T10:00:00Z', shortCode: 'aaa'}
              },
              {
                id: 'Card3',
                title: 'Write Blog',
                label: '2017-10-01',
                description: 'Can AI make memes?',
                metadata: {completedAt: '2017-10-01T10:00:00Z', shortCode: 'fa1'}
              },
              {
                id: 'Card4',
                title: 'Pay Rent',
                label: '2017-09-01',
                description: 'Transfer to bank account',
                metadata: {completedAt: '2017-09-01T10:00:00Z', shortCode: 'ga2'}
              }
            ]
          }
        ]
      }
    },
    135: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_exports__.a = {en: {translation: __webpack_require__(866)}, ru: {translation: __webpack_require__(867)}}
    },
    15: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(256),
        _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__
        )
      __webpack_exports__.a = function(message) {
        'object' === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(message)
          ? console.dir(message)
          : console.log(message)
      }
    },
    173: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21),
        _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__
        ),
        _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34),
        _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__
        ),
        _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67),
        _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__
        ),
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10),
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__
        ),
        _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11),
        _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__
        ),
        _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12),
        _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__
        ),
        _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13),
        _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__
        ),
        _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14),
        _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__
        ),
        react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__),
        prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_9__
        ),
        _styles_Base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9),
        Tag = (function(_Component) {
          function Tag() {
            return (
              _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Tag),
              _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(
                this,
                _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Tag).apply(this, arguments)
              )
            )
          }
          return (
            _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Tag, _Component),
            _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Tag, [
              {
                key: 'render',
                value: function() {
                  var _this$props = this.props,
                    title = _this$props.title,
                    color = _this$props.color,
                    bgcolor = _this$props.bgcolor,
                    tagStyle = _this$props.tagStyle,
                    otherProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(
                      _this$props,
                      ['title', 'color', 'bgcolor', 'tagStyle']
                    ),
                    style = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()(
                      {color: color || 'white', backgroundColor: bgcolor || 'orange'},
                      tagStyle
                    )
                  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
                    _styles_Base__WEBPACK_IMPORTED_MODULE_10__.w,
                    _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({style: style}, otherProps),
                    title
                  )
                }
              }
            ]),
            Tag
          )
        })(react__WEBPACK_IMPORTED_MODULE_8__.Component)
      ;(Tag.propTypes = {
        title: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,
        color: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
        bgcolor: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
        tagStyle: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object
      }),
        (__webpack_exports__.a = Tag),
        (Tag.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Tag',
          props: {
            title: {type: {name: 'string'}, required: !0, description: ''},
            color: {type: {name: 'string'}, required: !1, description: ''},
            bgcolor: {type: {name: 'string'}, required: !1, description: ''},
            tagStyle: {type: {name: 'object'}, required: !1, description: ''}
          }
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Card/Tag.js'] = {
            name: 'Tag',
            docgenInfo: Tag.__docgenInfo,
            path: 'src/components/Card/Tag.js'
          })
    },
    175: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(258),
        i18next__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_0__),
        react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(137),
        _src_locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(135)
      i18next__WEBPACK_IMPORTED_MODULE_0___default.a
        .use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next)
        .init({resources: _src_locales__WEBPACK_IMPORTED_MODULE_2__.a, lng: 'en'}),
        (__webpack_exports__.a = i18next__WEBPACK_IMPORTED_MODULE_0___default.a)
    },
    25: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'f', function() {
        return DeleteWrapper
      }),
        __webpack_require__.d(__webpack_exports__, 'h', function() {
          return GenDelButton
        }),
        __webpack_require__.d(__webpack_exports__, 'e', function() {
          return DelButton
        }),
        __webpack_require__.d(__webpack_exports__, 'm', function() {
          return MenuButton
        }),
        __webpack_require__.d(__webpack_exports__, 'j', function() {
          return LaneMenuHeader
        }),
        __webpack_require__.d(__webpack_exports__, 'i', function() {
          return LaneMenuContent
        }),
        __webpack_require__.d(__webpack_exports__, 'k', function() {
          return LaneMenuItem
        }),
        __webpack_require__.d(__webpack_exports__, 'l', function() {
          return LaneMenuTitle
        }),
        __webpack_require__.d(__webpack_exports__, 'd', function() {
          return CollapseBtn
        }),
        __webpack_require__.d(__webpack_exports__, 'g', function() {
          return ExpandBtn
        }),
        __webpack_require__.d(__webpack_exports__, 'a', function() {
          return AddButton
        }),
        __webpack_require__.d(__webpack_exports__, 'c', function() {
          return CancelButton
        }),
        __webpack_require__.d(__webpack_exports__, 'b', function() {
          return AddLaneLink
        })
      var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7),
        _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8),
        styled_components__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_1__
        ),
        _Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9)
      function _templateObject15() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  background: #2b6aa3;\n  border: none;\n  color: #fff;\n  transition: background 0.3s ease;\n  min-height: 32px;\n  padding: 4px 16px;\n  vertical-align: top;\n  margin-top: 0;\n  margin-right: 0px;\n  border-radius: 4px;\n  font-size: 13px;\n  cursor: pointer;\n  margin-bottom: 0;\n'
        ])
        return (
          (_templateObject15 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject14() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  background: #999999;\n  color: #fff;\n  transition: background 0.3s ease;\n  min-height: 32px;\n  padding: 4px 16px;\n  vertical-align: top;\n  margin-top: 0;\n  font-weight: bold;\n  border-radius: 3px;\n  font-size: 14px;\n  cursor: pointer;\n  margin-bottom: 0;\n'
        ])
        return (
          (_templateObject14 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject13() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  background: #5aac44;\n  color: #fff;\n  transition: background 0.3s ease;\n  min-height: 32px;\n  padding: 4px 16px;\n  vertical-align: top;\n  margin-top: 0;\n  margin-right: 8px;\n  font-weight: bold;\n  border-radius: 3px;\n  font-size: 14px;\n  cursor: pointer;\n  margin-bottom: 0;\n'
        ])
        return (
          (_templateObject13 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject12() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          "\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-top: 7px solid #444;\n    border-left: 7px solid transparent;\n    border-right: 7px solid transparent;\n    border-radius: 6px;\n  }\n  &:after {\n    content: '';\n    position: absolute;\n    left: 4px;\n    top: 0px;\n    border-top: 3px solid #e3e3e3;\n    border-left: 3px solid transparent;\n    border-right: 3px solid transparent;\n  }\n"
        ])
        return (
          (_templateObject12 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject11() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          "\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-bottom: 7px solid #444;\n    border-left: 7px solid transparent;\n    border-right: 7px solid transparent;\n    border-radius: 6px;\n  }\n  &:after {\n    content: '';\n    position: absolute;\n    left: 4px;\n    top: 4px;\n    border-bottom: 3px solid #e3e3e3;\n    border-left: 3px solid transparent;\n    border-right: 3px solid transparent;\n  }\n"
        ])
        return (
          (_templateObject11 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject10() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  width: 36px;\n  margin: 0 auto;\n  font-size: 14px;\n  position: relative;\n  cursor: pointer;\n'
        ])
        return (
          (_templateObject10 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject9() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  position: relative;\n  display: inline-block;\n  width: 4px;\n  height: 4px;\n  opacity: 1;\n  overflow: hidden;\n  border: 1px solid #83bd42;\n  border-radius: 50%;\n  padding: 4px;\n  background-color: #83bd42;\n\n  ',
          ":hover & {\n    opacity: 1;\n  }\n\n  &:hover::before,\n  &:hover::after {\n    background: red;\n  }\n\n  &:before,\n  &:after {\n    content: '';\n    position: absolute;\n    height: 2px;\n    width: 60%;\n    top: 45%;\n    left: 20%;\n    background: #fff;\n    border-radius: 5px;\n  }\n\n  &:before {\n    -webkit-transform: rotate(45deg);\n    -moz-transform: rotate(45deg);\n    -o-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n\n  &:after {\n    -webkit-transform: rotate(-45deg);\n    -moz-transform: rotate(-45deg);\n    -o-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n  }\n"
        ])
        return (
          (_templateObject9 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject8() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n    box-sizing: border-box;\n    color: #6b808c;\n    display: block;\n    line-height: 30px;\n    border-bottom: 1px solid rgba(9,45,66,.13);\n    margin: 0 6px;\n    overflow: hidden;\n    padding: 0 32px;\n    position: relative;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    z-index: 1;\n'
        ])
        return (
          (_templateObject8 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject7() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n    cursor: pointer;\n    display: block;\n    font-weight: 700;\n    padding: 6px 12px;\n    position: relative;\n    margin: 0 -12px;\n    text-decoration: none;\n\n    &:hover {\n      background-color: #3179BA;\n      color: #fff;\n    }\n'
        ])
        return (
          (_templateObject7 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject6() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n    overflow-x: hidden;\n    overflow-y: auto;\n    padding: 0 12px 12px;\n'
        ])
        return (
          (_templateObject6 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject5() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n    position: relative;\n    margin-bottom: 4px;\n    text-align: center;\n'
        ])
        return (
          (_templateObject5 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject4() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  transition: all 0.5s ease;\n  display: inline-block;\n  border: none;\n  outline: none;\n  font-size: 16px;\n  font-weight: bold;\n  height: 15px;\n  line-height: 1px;\n  margin: 0 0 8px;\n  padding: 0;\n  text-align: center;\n  width: 15px;\n  background: inherit;\n  cursor: pointer;\n'
        ])
        return (
          (_templateObject4 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject3() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  transition: all 0.5s ease;\n  display: inline-block;\n  border: none;\n  font-size: 8px;\n  height: 15px;\n  line-height: 1px;\n  margin: 0 0 8px;\n  padding: 0;\n  text-align: center;\n  width: 15px;\n  background: inherit;\n  cursor: pointer;\n  opacity: 0;\n  ',
          ':hover & {\n    opacity: 1;\n  }\n'
        ])
        return (
          (_templateObject3 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject2() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  transition: all 0.5s ease;\n  display: inline-block;\n  border: none;\n  font-size: 15px;\n  height: 15px;\n  padding: 0;\n  margin-top: 5px;\n  text-align: center;\n  width: 15px;\n  background: inherit;\n  cursor: pointer;\n'
        ])
        return (
          (_templateObject2 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  text-align: center;\n  position: absolute;\n  top: -1px;\n  right: 2px;\n  cursor: pointer;\n'
        ])
        return (
          (_templateObject = function() {
            return data
          }),
          data
        )
      }
      var DeleteWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject()),
        GenDelButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button(_templateObject2()),
        DelButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button(
          _templateObject3(),
          _Base__WEBPACK_IMPORTED_MODULE_2__.q
        ),
        MenuButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button(_templateObject4()),
        LaneMenuHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5()),
        LaneMenuContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject6()),
        LaneMenuItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject7()),
        LaneMenuTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span(_templateObject8()),
        ExpandCollapseBase = (styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span(
          _templateObject9(),
          _Base__WEBPACK_IMPORTED_MODULE_2__.g
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span(_templateObject10())),
        CollapseBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(ExpandCollapseBase)(_templateObject11()),
        ExpandBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(ExpandCollapseBase)(_templateObject12()),
        AddButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button(_templateObject13()),
        CancelButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button(_templateObject14()),
        AddLaneLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button(_templateObject15())
    },
    252: function(module) {
      module.exports = {
        lanes: [
          {
            id: 'PLANNED',
            title: 'Double Click Here',
            label: '20/70',
            style: {width: 280},
            cards: [
              {id: 'Milk', title: 'Buy milk', label: '15 mins', description: '2 Gallons of milk at the Deli store'},
              {
                id: 'Plan2',
                title: 'Dispose Garbage',
                label: '10 mins',
                description: 'Sort out recyclable and waste as needed'
              },
              {id: 'Plan3', title: 'Write Blog', label: '30 mins', description: 'Can AI make memes?'},
              {id: 'Plan4', title: 'Pay Rent', label: '5 mins', description: 'Transfer to bank account'}
            ]
          },
          {
            id: 'WIP',
            title: 'Work In Progress',
            label: '10/20',
            style: {width: 280},
            cards: [
              {
                id: 'Wip1',
                title: 'Clean House',
                label: '30 mins',
                description: 'Soap wash and polish floor. Polish windows and doors. Scrap all broken glasses'
              }
            ]
          },
          {id: 'BLOCKED', title: 'Blocked', label: '0/0', style: {width: 280}, cards: []},
          {
            id: 'COMPLETED',
            title: 'Completed',
            style: {width: 280},
            label: '2/5',
            cards: [
              {id: 'Completed1', title: 'Practice Meditation', label: '15 mins', description: 'Use Headspace app'},
              {
                id: 'Completed2',
                title: 'Maintain Daily Journal',
                label: '15 mins',
                description: 'Use Spreadsheet for now'
              }
            ]
          },
          {
            id: 'REPEAT',
            title: 'Repeat',
            style: {width: 280},
            label: '1/1',
            cards: [{id: 'Repeat1', title: 'Morning Jog', label: '30 mins', description: 'Track using fitbit'}]
          },
          {
            id: 'ARCHIVED',
            title: 'Archived',
            style: {width: 280},
            label: '1/1',
            cards: [{id: 'Archived1', title: 'Go Trekking', label: '300 mins', description: 'Completed 10km on cycle'}]
          },
          {
            id: 'ARCHIVED2',
            title: 'Archived2',
            style: {width: 280},
            label: '1/1',
            cards: [{id: 'Archived2', title: 'Go Jogging', label: '300 mins', description: 'Completed 10km on cycle'}]
          },
          {
            id: 'ARCHIVED3',
            title: 'Archived3',
            style: {width: 280},
            label: '1/1',
            cards: [{id: 'Archived3', title: 'Go Cycling', label: '300 mins', description: 'Completed 10km on cycle'}]
          }
        ]
      }
    },
    372: function(module, exports, __webpack_require__) {
      var content = __webpack_require__(877)
      'string' == typeof content && (content = [[module.i, content, '']])
      var options = {hmr: !0, transform: void 0, insertInto: void 0}
      __webpack_require__(879)(content, options)
      content.locals && (module.exports = content.locals)
    },
    382: function(module, exports, __webpack_require__) {
      __webpack_require__(383), __webpack_require__(456), (module.exports = __webpack_require__(457))
    },
    457: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6),
            _storybook_addon_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(376),
            _storybook_addon_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(377)
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(
            Object(_storybook_addon_options__WEBPACK_IMPORTED_MODULE_2__.withOptions)({
              name: 'react-trello',
              url: 'https://github.com/rcdexta/react-trello',
              goFullScreen: !1,
              showStoriesPanel: !0,
              showSearchBox: !1,
              addonPanelInRight: !1,
              showAddonPanel: !1
            })
          ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(
              Object(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_1__.withInfo)({
                header: !0,
                inline: !1,
                source: !0,
                propTables: !1
              })
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function() {
              __webpack_require__(714)
            }, module)
        }.call(this, __webpack_require__(22)(module))
    },
    5: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var LaneActions_namespaceObject = {}
      __webpack_require__.r(LaneActions_namespaceObject),
        __webpack_require__.d(LaneActions_namespaceObject, 'addCard', function() {
          return addCard
        }),
        __webpack_require__.d(LaneActions_namespaceObject, 'removeCard', function() {
          return removeCard
        }),
        __webpack_require__.d(LaneActions_namespaceObject, 'moveCardAcrossLanes', function() {
          return LaneActions_moveCardAcrossLanes
        }),
        __webpack_require__.d(LaneActions_namespaceObject, 'updateCards', function() {
          return updateCards
        }),
        __webpack_require__.d(LaneActions_namespaceObject, 'updateLanes', function() {
          return LaneActions_updateLanes
        }),
        __webpack_require__.d(LaneActions_namespaceObject, 'updateLane', function() {
          return LaneActions_updateLane
        }),
        __webpack_require__.d(LaneActions_namespaceObject, 'paginateLane', function() {
          return LaneActions_paginateLane
        }),
        __webpack_require__.d(LaneActions_namespaceObject, 'moveLane', function() {
          return LaneActions_moveLane
        }),
        __webpack_require__.d(LaneActions_namespaceObject, 'removeLane', function() {
          return LaneActions_removeLane
        })
      var BoardActions_namespaceObject = {}
      __webpack_require__.r(BoardActions_namespaceObject),
        __webpack_require__.d(BoardActions_namespaceObject, 'loadBoard', function() {
          return loadBoard
        }),
        __webpack_require__.d(BoardActions_namespaceObject, 'addLane', function() {
          return BoardActions_addLane
        })
      var helpers_extends = __webpack_require__(21),
        extends_default = __webpack_require__.n(helpers_extends),
        objectSpread = __webpack_require__(34),
        objectSpread_default = __webpack_require__.n(objectSpread),
        objectWithoutProperties = __webpack_require__(67),
        objectWithoutProperties_default = __webpack_require__.n(objectWithoutProperties),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        classCallCheck = __webpack_require__(10),
        classCallCheck_default = __webpack_require__.n(classCallCheck),
        createClass = __webpack_require__(11),
        createClass_default = __webpack_require__.n(createClass),
        possibleConstructorReturn = __webpack_require__(12),
        possibleConstructorReturn_default = __webpack_require__.n(possibleConstructorReturn),
        getPrototypeOf = __webpack_require__(13),
        getPrototypeOf_default = __webpack_require__.n(getPrototypeOf),
        inherits = __webpack_require__(14),
        inherits_default = __webpack_require__.n(inherits),
        prop_types = __webpack_require__(2),
        prop_types_default = __webpack_require__.n(prop_types),
        dist = __webpack_require__(74),
        dist_default = __webpack_require__.n(dist),
        wrapperClass = dist.constants.wrapperClass,
        Draggable_Draggable = (function(_Component) {
          function Draggable() {
            return (
              classCallCheck_default()(this, Draggable),
              possibleConstructorReturn_default()(this, getPrototypeOf_default()(Draggable).apply(this, arguments))
            )
          }
          return (
            inherits_default()(Draggable, _Component),
            createClass_default()(Draggable, [
              {
                key: 'render',
                value: function() {
                  if (this.props.render)
                    return react_default.a.cloneElement(this.props.render(), {className: wrapperClass})
                  var clsName = ''.concat(this.props.className ? this.props.className + ' ' : '')
                  return react_default.a.createElement(
                    'div',
                    extends_default()({}, this.props, {className: ''.concat(clsName).concat(wrapperClass)}),
                    this.props.children
                  )
                }
              }
            ]),
            Draggable
          )
        })(react.Component)
      Draggable_Draggable.propTypes = {render: prop_types_default.a.func}
      var dnd_Draggable = Draggable_Draggable
      ;(Draggable_Draggable.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Draggable',
        props: {render: {type: {name: 'func'}, required: !1, description: ''}}
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/dnd/Draggable.js'] = {
            name: 'Draggable',
            docgenInfo: Draggable_Draggable.__docgenInfo,
            path: 'src/dnd/Draggable.js'
          })
      __webpack_require__(58), __webpack_require__(150)
      var assertThisInitialized = __webpack_require__(1),
        assertThisInitialized_default = __webpack_require__.n(assertThisInitialized),
        react_dom = __webpack_require__(133),
        react_dom_default = __webpack_require__.n(react_dom)
      ;(dist_default.a.dropHandler = dist.dropHandlers.reactDropHandler().handler),
        (dist_default.a.wrapChild = function(p) {
          return p
        })
      var Container_Container = (function(_Component) {
        function Container(props) {
          var _this
          return (
            classCallCheck_default()(this, Container),
            ((_this = possibleConstructorReturn_default()(
              this,
              getPrototypeOf_default()(Container).call(this, props)
            )).getContainerOptions = _this.getContainerOptions.bind(
              assertThisInitialized_default()(assertThisInitialized_default()(_this))
            )),
            (_this.setRef = _this.setRef.bind(assertThisInitialized_default()(assertThisInitialized_default()(_this)))),
            (_this.prevContainer = null),
            _this
          )
        }
        return (
          inherits_default()(Container, _Component),
          createClass_default()(Container, [
            {
              key: 'componentDidMount',
              value: function() {
                ;(this.containerDiv = this.containerDiv || react_dom_default.a.findDOMNode(this)),
                  (this.prevContainer = this.containerDiv),
                  (this.container = dist_default()(this.containerDiv, this.getContainerOptions()))
              }
            },
            {
              key: 'componentWillUnmount',
              value: function() {
                this.container.dispose(), (this.container = null)
              }
            },
            {
              key: 'componentDidUpdate',
              value: function() {
                ;(this.containerDiv = this.containerDiv || react_dom_default.a.findDOMNode(this)),
                  this.containerDiv &&
                    this.prevContainer &&
                    this.prevContainer !== this.containerDiv &&
                    (this.container.dispose(),
                    (this.container = dist_default()(this.containerDiv, this.getContainerOptions())),
                    (this.prevContainer = this.containerDiv))
              }
            },
            {
              key: 'render',
              value: function() {
                return this.props.render
                  ? this.props.render(this.setRef)
                  : react_default.a.createElement(
                      'div',
                      {style: this.props.style, ref: this.setRef},
                      this.props.children
                    )
              }
            },
            {
              key: 'setRef',
              value: function(element) {
                this.containerDiv = element
              }
            },
            {
              key: 'getContainerOptions',
              value: function() {
                var _this2 = this,
                  functionProps = {}
                return (
                  this.props.onDragStart &&
                    (functionProps.onDragStart = function() {
                      var _this2$props
                      return (_this2$props = _this2.props).onDragStart.apply(_this2$props, arguments)
                    }),
                  this.props.onDragEnd &&
                    (functionProps.onDragEnd = function() {
                      var _this2$props2
                      return (_this2$props2 = _this2.props).onDragEnd.apply(_this2$props2, arguments)
                    }),
                  this.props.onDrop &&
                    (functionProps.onDrop = function() {
                      var _this2$props3
                      return (_this2$props3 = _this2.props).onDrop.apply(_this2$props3, arguments)
                    }),
                  this.props.getChildPayload &&
                    (functionProps.getChildPayload = function() {
                      var _this2$props4
                      return (_this2$props4 = _this2.props).getChildPayload.apply(_this2$props4, arguments)
                    }),
                  this.props.shouldAnimateDrop &&
                    (functionProps.shouldAnimateDrop = function() {
                      var _this2$props5
                      return (_this2$props5 = _this2.props).shouldAnimateDrop.apply(_this2$props5, arguments)
                    }),
                  this.props.shouldAcceptDrop &&
                    (functionProps.shouldAcceptDrop = function() {
                      var _this2$props6
                      return (_this2$props6 = _this2.props).shouldAcceptDrop.apply(_this2$props6, arguments)
                    }),
                  this.props.onDragEnter &&
                    (functionProps.onDragEnter = function() {
                      var _this2$props7
                      return (_this2$props7 = _this2.props).onDragEnter.apply(_this2$props7, arguments)
                    }),
                  this.props.onDragLeave &&
                    (functionProps.onDragLeave = function() {
                      var _this2$props8
                      return (_this2$props8 = _this2.props).onDragLeave.apply(_this2$props8, arguments)
                    }),
                  this.props.render &&
                    (functionProps.render = function() {
                      var _this2$props9
                      return (_this2$props9 = _this2.props).render.apply(_this2$props9, arguments)
                    }),
                  this.props.onDropReady &&
                    (functionProps.onDropReady = function() {
                      var _this2$props10
                      return (_this2$props10 = _this2.props).onDropReady.apply(_this2$props10, arguments)
                    }),
                  this.props.getGhostParent &&
                    (functionProps.getGhostParent = function() {
                      var _this2$props11
                      return (_this2$props11 = _this2.props).getGhostParent.apply(_this2$props11, arguments)
                    }),
                  Object.assign({}, this.props, functionProps)
                )
              }
            }
          ]),
          Container
        )
      })(react.Component)
      ;(Container_Container.propTypes = {
        behaviour: prop_types_default.a.oneOf(['move', 'copy', 'drag-zone']),
        groupName: prop_types_default.a.string,
        orientation: prop_types_default.a.oneOf(['horizontal', 'vertical']),
        style: prop_types_default.a.object,
        dragHandleSelector: prop_types_default.a.string,
        className: prop_types_default.a.string,
        nonDragAreaSelector: prop_types_default.a.string,
        dragBeginDelay: prop_types_default.a.number,
        animationDuration: prop_types_default.a.number,
        autoScrollEnabled: prop_types_default.a.string,
        lockAxis: prop_types_default.a.string,
        dragClass: prop_types_default.a.string,
        dropClass: prop_types_default.a.string,
        onDragStart: prop_types_default.a.func,
        onDragEnd: prop_types_default.a.func,
        onDrop: prop_types_default.a.func,
        getChildPayload: prop_types_default.a.func,
        shouldAnimateDrop: prop_types_default.a.func,
        shouldAcceptDrop: prop_types_default.a.func,
        onDragEnter: prop_types_default.a.func,
        onDragLeave: prop_types_default.a.func,
        render: prop_types_default.a.func,
        getGhostParent: prop_types_default.a.func,
        removeOnDropOut: prop_types_default.a.bool
      }),
        (Container_Container.defaultProps = {
          behaviour: 'move',
          orientation: 'vertical',
          className: 'reactTrelloBoard',
          dragBeginDelay: 0
        })
      var dnd_Container = Container_Container
      ;(Container_Container.__docgenInfo = {
        description: '',
        methods: [
          {name: 'setRef', docblock: null, modifiers: [], params: [{name: 'element', type: null}], returns: null},
          {name: 'getContainerOptions', docblock: null, modifiers: [], params: [], returns: null}
        ],
        displayName: 'Container',
        props: {
          behaviour: {
            defaultValue: {value: "'move'", computed: !1},
            type: {
              name: 'enum',
              value: [
                {value: '"move"', computed: !1},
                {value: '"copy"', computed: !1},
                {value: '"drag-zone"', computed: !1}
              ]
            },
            required: !1,
            description: ''
          },
          orientation: {
            defaultValue: {value: "'vertical'", computed: !1},
            type: {name: 'enum', value: [{value: '"horizontal"', computed: !1}, {value: '"vertical"', computed: !1}]},
            required: !1,
            description: ''
          },
          className: {
            defaultValue: {value: "'reactTrelloBoard'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: ''
          },
          dragBeginDelay: {
            defaultValue: {value: '0', computed: !1},
            type: {name: 'number'},
            required: !1,
            description: ''
          },
          groupName: {type: {name: 'string'}, required: !1, description: ''},
          style: {type: {name: 'object'}, required: !1, description: ''},
          dragHandleSelector: {type: {name: 'string'}, required: !1, description: ''},
          nonDragAreaSelector: {type: {name: 'string'}, required: !1, description: ''},
          animationDuration: {type: {name: 'number'}, required: !1, description: ''},
          autoScrollEnabled: {type: {name: 'string'}, required: !1, description: ''},
          lockAxis: {type: {name: 'string'}, required: !1, description: ''},
          dragClass: {type: {name: 'string'}, required: !1, description: ''},
          dropClass: {type: {name: 'string'}, required: !1, description: ''},
          onDragStart: {type: {name: 'func'}, required: !1, description: ''},
          onDragEnd: {type: {name: 'func'}, required: !1, description: ''},
          onDrop: {type: {name: 'func'}, required: !1, description: ''},
          getChildPayload: {type: {name: 'func'}, required: !1, description: ''},
          shouldAnimateDrop: {type: {name: 'func'}, required: !1, description: ''},
          shouldAcceptDrop: {type: {name: 'func'}, required: !1, description: ''},
          onDragEnter: {type: {name: 'func'}, required: !1, description: ''},
          onDragLeave: {type: {name: 'func'}, required: !1, description: ''},
          render: {type: {name: 'func'}, required: !1, description: ''},
          getGhostParent: {type: {name: 'func'}, required: !1, description: ''},
          removeOnDropOut: {type: {name: 'bool'}, required: !1, description: ''}
        }
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/dnd/Container.js'] = {
            name: 'Container',
            docgenInfo: Container_Container.__docgenInfo,
            path: 'src/dnd/Container.js'
          })
      __webpack_require__(26), __webpack_require__(336)
      var defineProperty = __webpack_require__(3),
        defineProperty_default = __webpack_require__.n(defineProperty),
        redux = __webpack_require__(66),
        lib = __webpack_require__(108),
        pick = __webpack_require__(257),
        pick_default = __webpack_require__.n(pick),
        isEqual = __webpack_require__(136),
        isEqual_default = __webpack_require__.n(isEqual),
        classnames = (__webpack_require__(203), __webpack_require__(134)),
        classnames_default = __webpack_require__.n(classnames),
        cloneDeep = __webpack_require__(378),
        cloneDeep_default = __webpack_require__.n(cloneDeep),
        v1 = __webpack_require__(109),
        v1_default = __webpack_require__.n(v1),
        redux_actions_lib = __webpack_require__(46),
        addCard = Object(redux_actions_lib.createAction)('ADD_CARD'),
        removeCard = Object(redux_actions_lib.createAction)('REMOVE_CARD'),
        LaneActions_moveCardAcrossLanes = Object(redux_actions_lib.createAction)('MOVE_CARD'),
        updateCards = Object(redux_actions_lib.createAction)('UPDATE_CARDS'),
        LaneActions_updateLanes = Object(redux_actions_lib.createAction)('UPDATE_LANES'),
        LaneActions_updateLane = Object(redux_actions_lib.createAction)('UPDATE_LANE'),
        LaneActions_paginateLane = Object(redux_actions_lib.createAction)('PAGINATE_LANE'),
        LaneActions_moveLane = Object(redux_actions_lib.createAction)('MOVE_LANE'),
        LaneActions_removeLane = Object(redux_actions_lib.createAction)('REMOVE_LANE'),
        Lane_Lane = (function(_Component) {
          function Lane() {
            var _getPrototypeOf2, _this
            classCallCheck_default()(this, Lane)
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++)
              args[_key] = arguments[_key]
            return (
              (_this = possibleConstructorReturn_default()(
                this,
                (_getPrototypeOf2 = getPrototypeOf_default()(Lane)).call.apply(_getPrototypeOf2, [this].concat(args))
              )),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'state',
                {loading: !1, currentPage: _this.props.currentPage, addCardMode: !1, collapsed: !1, isDraggingOver: !1}
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'handleScroll',
                function(evt) {
                  var node = evt.target,
                    elemScrolPosition = node.scrollHeight - node.scrollTop - node.clientHeight,
                    onLaneScroll = _this.props.onLaneScroll
                  if (0 >= elemScrolPosition && onLaneScroll && !_this.state.loading) {
                    var currentPage = _this.state.currentPage
                    _this.setState({loading: !0})
                    var nextPage = currentPage + 1
                    onLaneScroll(nextPage, _this.props.id).then(function(moreCards) {
                      moreCards && 0 !== moreCards.length
                        ? _this.props.actions.paginateLane({
                            laneId: _this.props.id,
                            newCards: moreCards,
                            nextPage: nextPage
                          })
                        : (node.scrollTop -= 100),
                        _this.setState({loading: !1})
                    })
                  }
                }
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'laneDidMount',
                function(node) {
                  node && node.addEventListener('scroll', _this.handleScroll)
                }
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'removeCard',
                function(cardId) {
                  _this.props.onCardDelete && _this.props.onCardDelete(cardId, _this.props.id),
                    _this.props.actions.removeCard({laneId: _this.props.id, cardId: cardId})
                }
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'handleCardClick',
                function(e, card) {
                  var onCardClick = _this.props.onCardClick
                  onCardClick && onCardClick(card.id, card.metadata, card.laneId), e.stopPropagation()
                }
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'showEditableCard',
                function() {
                  _this.setState({addCardMode: !0})
                }
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'hideEditableCard',
                function() {
                  _this.setState({addCardMode: !1})
                }
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'addNewCard',
                function(params) {
                  var laneId = _this.props.id,
                    id = v1_default()()
                  _this.hideEditableCard()
                  var card = objectSpread_default()({id: id}, params)
                  _this.props.actions.addCard({laneId: laneId, card: card}), _this.props.onCardAdd(card, laneId)
                }
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'onDragStart',
                function(_ref) {
                  var payload = _ref.payload,
                    handleDragStart = _this.props.handleDragStart
                  handleDragStart && handleDragStart(payload.id, payload.laneId)
                }
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'shouldAcceptDrop',
                function(sourceContainerOptions) {
                  return _this.props.droppable && sourceContainerOptions.groupName === _this.groupName
                }
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'onDragEnd',
                function(laneId, result) {
                  var handleDragEnd = _this.props.handleDragEnd,
                    addedIndex = result.addedIndex,
                    payload = result.payload
                  if ((_this.setState({isDraggingOver: !1}), null != addedIndex)) {
                    var newCard = objectSpread_default()({}, cloneDeep_default()(payload), {laneId: laneId}),
                      response =
                        !handleDragEnd || handleDragEnd(payload.id, payload.laneId, laneId, addedIndex, newCard)
                    return (
                      (void 0 !== response && !response) ||
                        (_this.props.actions.moveCardAcrossLanes({
                          fromLaneId: payload.laneId,
                          toLaneId: laneId,
                          cardId: payload.id,
                          index: addedIndex
                        }),
                        _this.props.onCardMoveAcrossLanes(payload.laneId, laneId, payload.id, addedIndex)),
                      response
                    )
                  }
                }
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'renderDragContainer',
                function(isDraggingOver) {
                  var _this$props = _this.props,
                    id = _this$props.id,
                    cards = _this$props.cards,
                    laneSortFunction = _this$props.laneSortFunction,
                    editable = _this$props.editable,
                    hideCardDeleteIcon = _this$props.hideCardDeleteIcon,
                    cardDraggable = _this$props.cardDraggable,
                    cardDragClass = _this$props.cardDragClass,
                    tagStyle = _this$props.tagStyle,
                    cardStyle = _this$props.cardStyle,
                    components = _this$props.components,
                    t = _this$props.t,
                    _this$state = _this.state,
                    addCardMode = _this$state.addCardMode,
                    showableCards = _this$state.collapsed ? [] : cards,
                    cardList = _this.sortCards(showableCards, laneSortFunction).map(function(card, idx) {
                      var cardToRender = react_default.a.createElement(
                        components.Card,
                        extends_default()(
                          {
                            key: card.id,
                            index: idx,
                            style: card.style || cardStyle,
                            className: 'react-trello-card',
                            onDelete: function() {
                              return _this.removeCard(card.id)
                            },
                            onClick: function(e) {
                              return _this.handleCardClick(e, card)
                            },
                            showDeleteButton: !hideCardDeleteIcon,
                            tagStyle: tagStyle,
                            cardDraggable: cardDraggable
                          },
                          card
                        )
                      )
                      return !cardDraggable || (card.hasOwnProperty('draggable') && !card.draggable)
                        ? react_default.a.createElement('span', {key: card.id}, cardToRender)
                        : react_default.a.createElement(dnd_Draggable, {key: card.id}, cardToRender)
                    })
                  return react_default.a.createElement(
                    components.ScrollableLane,
                    {ref: _this.laneDidMount, isDraggingOver: isDraggingOver},
                    react_default.a.createElement(
                      dnd_Container,
                      {
                        orientation: 'vertical',
                        groupName: _this.groupName,
                        dragClass: cardDragClass,
                        onDragStart: _this.onDragStart,
                        onDrop: function(e) {
                          return _this.onDragEnd(id, e)
                        },
                        onDragEnter: function() {
                          return _this.setState({isDraggingOver: !0})
                        },
                        onDragLeave: function() {
                          return _this.setState({isDraggingOver: !1})
                        },
                        shouldAcceptDrop: _this.shouldAcceptDrop,
                        getChildPayload: function(index) {
                          return _this.props.getCardDetails(id, index)
                        }
                      },
                      cardList
                    ),
                    editable &&
                      !addCardMode &&
                      react_default.a.createElement(components.AddCardLink, {onClick: _this.showEditableCard, t: t}),
                    addCardMode &&
                      react_default.a.createElement(components.NewCardForm, {
                        onCancel: _this.hideEditableCard,
                        t: t,
                        laneId: id,
                        onAdd: _this.addNewCard
                      })
                  )
                }
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'removeLane',
                function() {
                  var id = _this.props.id
                  _this.props.actions.removeLane({laneId: id}), _this.props.onLaneDelete(id)
                }
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'updateTitle',
                function(value) {
                  _this.props.actions.updateLane({id: _this.props.id, title: value}),
                    _this.props.onLaneUpdate(_this.props.id, {title: value})
                }
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'renderHeader',
                function(pickedProps) {
                  var components = _this.props.components
                  return react_default.a.createElement(
                    components.LaneHeader,
                    extends_default()({}, pickedProps, {
                      onDelete: _this.removeLane,
                      onDoubleClick: _this.toggleLaneCollapsed,
                      updateTitle: _this.updateTitle
                    })
                  )
                }
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'toggleLaneCollapsed',
                function() {
                  _this.props.collapsibleLanes &&
                    _this.setState(function(state) {
                      return {collapsed: !state.collapsed}
                    })
                }
              ),
              _this
            )
          }
          return (
            inherits_default()(Lane, _Component),
            createClass_default()(Lane, [
              {
                key: 'sortCards',
                value: function(cards, sortFunction) {
                  return cards
                    ? sortFunction
                      ? cards.concat().sort(function(card1, card2) {
                          return sortFunction(card1, card2)
                        })
                      : cards
                    : []
                }
              },
              {
                key: 'componentWillReceiveProps',
                value: function(nextProps) {
                  isEqual_default()(this.props.cards, nextProps.cards) ||
                    this.setState({currentPage: nextProps.currentPage})
                }
              },
              {
                key: 'render',
                value: function() {
                  var _this$state2 = this.state,
                    loading = _this$state2.loading,
                    isDraggingOver = _this$state2.isDraggingOver,
                    collapsed = _this$state2.collapsed,
                    _this$props2 = this.props,
                    id = _this$props2.id,
                    cards = _this$props2.cards,
                    collapsibleLanes = _this$props2.collapsibleLanes,
                    components = _this$props2.components,
                    onLaneClick = _this$props2.onLaneClick,
                    otherProps = (_this$props2.onLaneScroll,
                    _this$props2.onCardClick,
                    _this$props2.onCardAdd,
                    _this$props2.onCardDelete,
                    _this$props2.onLaneDelete,
                    _this$props2.onLaneUpdate,
                    _this$props2.onCardMoveAcrossLanes,
                    objectWithoutProperties_default()(_this$props2, [
                      'id',
                      'cards',
                      'collapsibleLanes',
                      'components',
                      'onLaneClick',
                      'onLaneScroll',
                      'onCardClick',
                      'onCardAdd',
                      'onCardDelete',
                      'onLaneDelete',
                      'onLaneUpdate',
                      'onCardMoveAcrossLanes'
                    ])),
                    allClassNames = classnames_default()('react-trello-lane', this.props.className || ''),
                    showFooter = collapsibleLanes && 0 < cards.length
                  return react_default.a.createElement(
                    components.Section,
                    extends_default()({}, otherProps, {
                      key: id,
                      onClick: function() {
                        return onLaneClick && onLaneClick(id)
                      },
                      draggable: !1,
                      className: allClassNames
                    }),
                    this.renderHeader(objectSpread_default()({id: id, cards: cards}, otherProps)),
                    this.renderDragContainer(isDraggingOver),
                    loading && react_default.a.createElement(components.Loader, null),
                    showFooter &&
                      react_default.a.createElement(components.LaneFooter, {
                        onClick: this.toggleLaneCollapsed,
                        collapsed: collapsed
                      })
                  )
                }
              },
              {
                key: 'groupName',
                get: function() {
                  var boardId = this.props.boardId
                  return 'TrelloBoard'.concat(boardId, 'Lane')
                }
              }
            ]),
            Lane
          )
        })(react.Component)
      ;(Lane_Lane.propTypes = {
        actions: prop_types_default.a.object,
        id: prop_types_default.a.string.isRequired,
        boardId: prop_types_default.a.string,
        title: prop_types_default.a.node,
        index: prop_types_default.a.number,
        laneSortFunction: prop_types_default.a.func,
        style: prop_types_default.a.object,
        cardStyle: prop_types_default.a.object,
        tagStyle: prop_types_default.a.object,
        titleStyle: prop_types_default.a.object,
        labelStyle: prop_types_default.a.object,
        cards: prop_types_default.a.array,
        label: prop_types_default.a.string,
        currentPage: prop_types_default.a.number,
        draggable: prop_types_default.a.bool,
        collapsibleLanes: prop_types_default.a.bool,
        droppable: prop_types_default.a.bool,
        onCardMoveAcrossLanes: prop_types_default.a.func,
        onCardClick: prop_types_default.a.func,
        onCardDelete: prop_types_default.a.func,
        onCardAdd: prop_types_default.a.func,
        onLaneDelete: prop_types_default.a.func,
        onLaneUpdate: prop_types_default.a.func,
        onLaneClick: prop_types_default.a.func,
        onLaneScroll: prop_types_default.a.func,
        editable: prop_types_default.a.bool,
        laneDraggable: prop_types_default.a.bool,
        cardDraggable: prop_types_default.a.bool,
        cardDragClass: prop_types_default.a.string,
        canAddLanes: prop_types_default.a.bool,
        t: prop_types_default.a.func.isRequired
      }),
        (Lane_Lane.defaultProps = {
          style: {},
          titleStyle: {},
          labelStyle: {},
          label: void 0,
          editable: !1,
          onLaneUpdate: function() {},
          onCardAdd: function() {}
        })
      var controllers_Lane = Object(lib.connect)(null, function(dispatch) {
        return {actions: Object(redux.bindActionCreators)(LaneActions_namespaceObject, dispatch)}
      })(Lane_Lane)
      ;(Lane_Lane.__docgenInfo = {
        description: '',
        methods: [
          {name: 'handleScroll', docblock: null, modifiers: [], params: [{name: 'evt', type: null}], returns: null},
          {
            name: 'sortCards',
            docblock: null,
            modifiers: [],
            params: [{name: 'cards', type: null}, {name: 'sortFunction', type: null}],
            returns: null
          },
          {name: 'laneDidMount', docblock: null, modifiers: [], params: [{name: 'node', type: null}], returns: null},
          {name: 'removeCard', docblock: null, modifiers: [], params: [{name: 'cardId', type: null}], returns: null},
          {
            name: 'handleCardClick',
            docblock: null,
            modifiers: [],
            params: [{name: 'e', type: null}, {name: 'card', type: null}],
            returns: null
          },
          {name: 'showEditableCard', docblock: null, modifiers: [], params: [], returns: null},
          {name: 'hideEditableCard', docblock: null, modifiers: [], params: [], returns: null},
          {name: 'addNewCard', docblock: null, modifiers: [], params: [{name: 'params', type: null}], returns: null},
          {
            name: 'onDragStart',
            docblock: null,
            modifiers: [],
            params: [{name: '{payload}', type: null}],
            returns: null
          },
          {
            name: 'shouldAcceptDrop',
            docblock: null,
            modifiers: [],
            params: [{name: 'sourceContainerOptions', type: null}],
            returns: null
          },
          {name: 'groupName', docblock: null, modifiers: ['get'], params: [], returns: null},
          {
            name: 'onDragEnd',
            docblock: null,
            modifiers: [],
            params: [{name: 'laneId', type: null}, {name: 'result', type: null}],
            returns: null
          },
          {
            name: 'renderDragContainer',
            docblock: null,
            modifiers: [],
            params: [{name: 'isDraggingOver', type: null}],
            returns: null
          },
          {name: 'removeLane', docblock: null, modifiers: [], params: [], returns: null},
          {name: 'updateTitle', docblock: null, modifiers: [], params: [{name: 'value', type: null}], returns: null},
          {
            name: 'renderHeader',
            docblock: null,
            modifiers: [],
            params: [{name: 'pickedProps', type: null}],
            returns: null
          },
          {name: 'toggleLaneCollapsed', docblock: null, modifiers: [], params: [], returns: null}
        ],
        displayName: 'Lane',
        props: {
          style: {defaultValue: {value: '{}', computed: !1}, type: {name: 'object'}, required: !1, description: ''},
          titleStyle: {
            defaultValue: {value: '{}', computed: !1},
            type: {name: 'object'},
            required: !1,
            description: ''
          },
          labelStyle: {
            defaultValue: {value: '{}', computed: !1},
            type: {name: 'object'},
            required: !1,
            description: ''
          },
          label: {
            defaultValue: {value: 'undefined', computed: !0},
            type: {name: 'string'},
            required: !1,
            description: ''
          },
          editable: {defaultValue: {value: 'false', computed: !1}, type: {name: 'bool'}, required: !1, description: ''},
          onLaneUpdate: {
            defaultValue: {value: '() => {}', computed: !1},
            type: {name: 'func'},
            required: !1,
            description: ''
          },
          onCardAdd: {
            defaultValue: {value: '() => {}', computed: !1},
            type: {name: 'func'},
            required: !1,
            description: ''
          },
          actions: {type: {name: 'object'}, required: !1, description: ''},
          id: {type: {name: 'string'}, required: !0, description: ''},
          boardId: {type: {name: 'string'}, required: !1, description: ''},
          title: {type: {name: 'node'}, required: !1, description: ''},
          index: {type: {name: 'number'}, required: !1, description: ''},
          laneSortFunction: {type: {name: 'func'}, required: !1, description: ''},
          cardStyle: {type: {name: 'object'}, required: !1, description: ''},
          tagStyle: {type: {name: 'object'}, required: !1, description: ''},
          cards: {type: {name: 'array'}, required: !1, description: ''},
          currentPage: {type: {name: 'number'}, required: !1, description: ''},
          draggable: {type: {name: 'bool'}, required: !1, description: ''},
          collapsibleLanes: {type: {name: 'bool'}, required: !1, description: ''},
          droppable: {type: {name: 'bool'}, required: !1, description: ''},
          onCardMoveAcrossLanes: {type: {name: 'func'}, required: !1, description: ''},
          onCardClick: {type: {name: 'func'}, required: !1, description: ''},
          onCardDelete: {type: {name: 'func'}, required: !1, description: ''},
          onLaneDelete: {type: {name: 'func'}, required: !1, description: ''},
          onLaneClick: {type: {name: 'func'}, required: !1, description: ''},
          onLaneScroll: {type: {name: 'func'}, required: !1, description: ''},
          laneDraggable: {type: {name: 'bool'}, required: !1, description: ''},
          cardDraggable: {type: {name: 'bool'}, required: !1, description: ''},
          cardDragClass: {type: {name: 'string'}, required: !1, description: ''},
          canAddLanes: {type: {name: 'bool'}, required: !1, description: ''},
          t: {type: {name: 'func'}, required: !0, description: ''}
        }
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/controllers/Lane.js'] = {
            name: 'Lane',
            docgenInfo: Lane_Lane.__docgenInfo,
            path: 'src/controllers/Lane.js'
          })
      var react_popopo_dist = __webpack_require__(96),
        loadBoard = Object(redux_actions_lib.createAction)('LOAD_BOARD'),
        BoardActions_addLane = Object(redux_actions_lib.createAction)('ADD_LANE'),
        BoardContainer_BoardContainer = (function(_Component) {
          function BoardContainer() {
            var _getPrototypeOf2, _this
            classCallCheck_default()(this, BoardContainer)
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++)
              args[_key] = arguments[_key]
            return (
              (_this = possibleConstructorReturn_default()(
                this,
                (_getPrototypeOf2 = getPrototypeOf_default()(BoardContainer)).call.apply(
                  _getPrototypeOf2,
                  [this].concat(args)
                )
              )),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'state',
                {addLaneMode: !1}
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'onDragStart',
                function(_ref) {
                  var payload = _ref.payload
                  ;(0, _this.props.handleLaneDragStart)(payload.id)
                }
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'onLaneDrop',
                function(_ref2) {
                  var removedIndex = _ref2.removedIndex,
                    addedIndex = _ref2.addedIndex,
                    payload = _ref2.payload,
                    _this$props = _this.props,
                    actions = _this$props.actions,
                    handleLaneDragEnd = _this$props.handleLaneDragEnd
                  removedIndex !== addedIndex &&
                    (actions.moveLane({oldIndex: removedIndex, newIndex: addedIndex}),
                    handleLaneDragEnd(removedIndex, addedIndex, payload))
                }
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'getCardDetails',
                function(laneId, cardIndex) {
                  return _this.props.reducerData.lanes.find(function(lane) {
                    return lane.id === laneId
                  }).cards[cardIndex]
                }
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'getLaneDetails',
                function(index) {
                  return _this.props.reducerData.lanes[index]
                }
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'wireEventBus',
                function() {
                  var _this$props2 = _this.props,
                    actions = _this$props2.actions
                  ;(0, _this$props2.eventBusHandle)({
                    publish: function(event) {
                      switch (event.type) {
                        case 'ADD_CARD':
                          return actions.addCard({laneId: event.laneId, card: event.card})
                        case 'REMOVE_CARD':
                          return actions.removeCard({laneId: event.laneId, cardId: event.cardId})
                        case 'REFRESH_BOARD':
                          return actions.loadBoard(event.data)
                        case 'MOVE_CARD':
                          return actions.moveCardAcrossLanes({
                            fromLaneId: event.fromLaneId,
                            toLaneId: event.toLaneId,
                            cardId: event.cardId,
                            index: event.index
                          })
                        case 'UPDATE_LANES':
                          return actions.updateLanes(event.lanes)
                        case 'UPDATE_LANE':
                          return actions.updateLane(event.lane)
                      }
                    }
                  })
                }
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'hideEditableLane',
                function() {
                  _this.setState({addLaneMode: !1})
                }
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'showEditableLane',
                function() {
                  _this.setState({addLaneMode: !0})
                }
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'addNewLane',
                function(params) {
                  _this.hideEditableLane(), _this.props.actions.addLane(params), _this.props.onLaneAdd(params)
                }
              ),
              _this
            )
          }
          return (
            inherits_default()(BoardContainer, _Component),
            createClass_default()(BoardContainer, [
              {
                key: 'componentDidMount',
                value: function() {
                  var _this$props3 = this.props,
                    actions = _this$props3.actions,
                    eventBusHandle = _this$props3.eventBusHandle
                  actions.loadBoard(this.props.data), eventBusHandle && this.wireEventBus()
                }
              },
              {
                key: 'componentWillReceiveProps',
                value: function(nextProps) {
                  var _this$props4 = this.props,
                    data = _this$props4.data,
                    reducerData = _this$props4.reducerData,
                    onDataChange = _this$props4.onDataChange
                  nextProps.reducerData &&
                    !isEqual_default()(reducerData, nextProps.reducerData) &&
                    onDataChange(nextProps.reducerData),
                    nextProps.data &&
                      !isEqual_default()(nextProps.data, data) &&
                      (this.props.actions.loadBoard(nextProps.data), onDataChange(nextProps.data))
                }
              },
              {
                key: 'render',
                value: function() {
                  var _this2 = this,
                    _this$props5 = this.props,
                    components = (_this$props5.id, _this$props5.components),
                    reducerData = _this$props5.reducerData,
                    draggable = _this$props5.draggable,
                    laneDraggable = _this$props5.laneDraggable,
                    laneDragClass = _this$props5.laneDragClass,
                    style = _this$props5.style,
                    editable = (_this$props5.onDataChange,
                    _this$props5.onCardAdd,
                    _this$props5.onCardClick,
                    _this$props5.onCardDelete,
                    _this$props5.onLaneScroll,
                    _this$props5.onLaneClick,
                    _this$props5.onLaneAdd,
                    _this$props5.onLaneDelete,
                    _this$props5.onLaneUpdate,
                    _this$props5.editable),
                    canAddLanes = _this$props5.canAddLanes,
                    laneStyle = _this$props5.laneStyle,
                    t = (_this$props5.onCardMoveAcrossLanes, _this$props5.t),
                    otherProps = objectWithoutProperties_default()(_this$props5, [
                      'id',
                      'components',
                      'reducerData',
                      'draggable',
                      'laneDraggable',
                      'laneDragClass',
                      'style',
                      'onDataChange',
                      'onCardAdd',
                      'onCardClick',
                      'onCardDelete',
                      'onLaneScroll',
                      'onLaneClick',
                      'onLaneAdd',
                      'onLaneDelete',
                      'onLaneUpdate',
                      'editable',
                      'canAddLanes',
                      'laneStyle',
                      'onCardMoveAcrossLanes',
                      't'
                    ]),
                    addLaneMode = this.state.addLaneMode,
                    passthroughProps = pick_default()(this.props, [
                      'onCardMoveAcrossLanes',
                      'onLaneScroll',
                      'onLaneDelete',
                      'onLaneUpdate',
                      'onCardClick',
                      'onCardDelete',
                      'onCardAdd',
                      'onLaneClick',
                      'laneSortFunction',
                      'draggable',
                      'laneDraggable',
                      'cardDraggable',
                      'collapsibleLanes',
                      'canAddLanes',
                      'hideCardDeleteIcon',
                      'tagStyle',
                      'handleDragStart',
                      'handleDragEnd',
                      'cardDragClass',
                      'editLaneTitle',
                      't'
                    ])
                  return react_default.a.createElement(
                    components.BoardWrapper,
                    extends_default()({style: style}, otherProps, {draggable: !1}),
                    react_default.a.createElement(
                      react_popopo_dist.PopoverWrapper,
                      null,
                      react_default.a.createElement(
                        dnd_Container,
                        {
                          orientation: 'horizontal',
                          onDragStart: this.onDragStart,
                          dragClass: laneDragClass,
                          dropClass: '',
                          onDrop: this.onLaneDrop,
                          lockAxis: 'x',
                          getChildPayload: function(index) {
                            return _this2.getLaneDetails(index)
                          },
                          groupName: this.groupName
                        },
                        reducerData.lanes.map(function(lane, index) {
                          var id = lane.id,
                            droppable = lane.droppable,
                            otherProps = objectWithoutProperties_default()(lane, ['id', 'droppable']),
                            laneToRender = react_default.a.createElement(
                              controllers_Lane,
                              extends_default()(
                                {
                                  key: id,
                                  boardId: _this2.groupName,
                                  components: components,
                                  id: id,
                                  getCardDetails: _this2.getCardDetails,
                                  index: index,
                                  droppable: void 0 === droppable || droppable,
                                  style: laneStyle || lane.style || {},
                                  labelStyle: lane.labelStyle || {},
                                  cardStyle: _this2.props.cardStyle || lane.cardStyle,
                                  editable: editable && !lane.disallowAddingCard
                                },
                                otherProps,
                                passthroughProps
                              )
                            )
                          return draggable && laneDraggable
                            ? react_default.a.createElement(dnd_Draggable, {key: lane.id}, laneToRender)
                            : laneToRender
                        })
                      )
                    ),
                    canAddLanes &&
                      react_default.a.createElement(
                        dnd_Container,
                        {orientation: 'horizontal'},
                        editable && !addLaneMode
                          ? react_default.a.createElement(components.NewLaneSection, {
                              t: t,
                              onClick: this.showEditableLane
                            })
                          : addLaneMode &&
                            react_default.a.createElement(components.NewLaneForm, {
                              onCancel: this.hideEditableLane,
                              onAdd: this.addNewLane,
                              t: t
                            })
                      )
                  )
                }
              },
              {
                key: 'groupName',
                get: function() {
                  var id = this.props.id
                  return 'TrelloBoard'.concat(id)
                }
              }
            ]),
            BoardContainer
          )
        })(react.Component)
      ;(BoardContainer_BoardContainer.propTypes = {
        id: prop_types_default.a.string,
        components: prop_types_default.a.object,
        actions: prop_types_default.a.object,
        data: prop_types_default.a.object.isRequired,
        reducerData: prop_types_default.a.object,
        onDataChange: prop_types_default.a.func,
        eventBusHandle: prop_types_default.a.func,
        onLaneScroll: prop_types_default.a.func,
        onCardClick: prop_types_default.a.func,
        onCardDelete: prop_types_default.a.func,
        onCardAdd: prop_types_default.a.func,
        onLaneAdd: prop_types_default.a.func,
        onLaneDelete: prop_types_default.a.func,
        onLaneClick: prop_types_default.a.func,
        onLaneUpdate: prop_types_default.a.func,
        laneSortFunction: prop_types_default.a.func,
        draggable: prop_types_default.a.bool,
        collapsibleLanes: prop_types_default.a.bool,
        editable: prop_types_default.a.bool,
        canAddLanes: prop_types_default.a.bool,
        hideCardDeleteIcon: prop_types_default.a.bool,
        handleDragStart: prop_types_default.a.func,
        handleDragEnd: prop_types_default.a.func,
        handleLaneDragStart: prop_types_default.a.func,
        handleLaneDragEnd: prop_types_default.a.func,
        style: prop_types_default.a.object,
        tagStyle: prop_types_default.a.object,
        laneDraggable: prop_types_default.a.bool,
        cardDraggable: prop_types_default.a.bool,
        cardDragClass: prop_types_default.a.string,
        laneDragClass: prop_types_default.a.string,
        onCardMoveAcrossLanes: prop_types_default.a.func.isRequired,
        t: prop_types_default.a.func.isRequired
      }),
        (BoardContainer_BoardContainer.defaultProps = {
          t: function(v) {
            return v
          },
          onDataChange: function() {},
          handleDragStart: function() {},
          handleDragEnd: function() {},
          handleLaneDragStart: function() {},
          handleLaneDragEnd: function() {},
          onLaneAdd: function() {},
          onLaneDelete: function() {},
          onCardMoveAcrossLanes: function() {},
          onLaneUpdate: function() {},
          editable: !1,
          canAddLanes: !1,
          hideCardDeleteIcon: !1,
          draggable: !1,
          collapsibleLanes: !1,
          laneDraggable: !0,
          cardDraggable: !0,
          cardDragClass: 'react_trello_dragClass',
          laneDragClass: 'react_trello_dragLaneClass'
        })
      var controllers_BoardContainer = Object(lib.connect)(
        function(state) {
          return state.lanes ? {reducerData: state} : {}
        },
        function(dispatch) {
          return {
            actions: Object(redux.bindActionCreators)(
              objectSpread_default()({}, BoardActions_namespaceObject, LaneActions_namespaceObject),
              dispatch
            )
          }
        }
      )(BoardContainer_BoardContainer)
      ;(BoardContainer_BoardContainer.__docgenInfo = {
        description: '',
        methods: [
          {
            name: 'onDragStart',
            docblock: null,
            modifiers: [],
            params: [{name: '{payload}', type: null}],
            returns: null
          },
          {
            name: 'onLaneDrop',
            docblock: null,
            modifiers: [],
            params: [{name: '{removedIndex, addedIndex, payload}', type: null}],
            returns: null
          },
          {
            name: 'getCardDetails',
            docblock: null,
            modifiers: [],
            params: [{name: 'laneId', type: null}, {name: 'cardIndex', type: null}],
            returns: null
          },
          {name: 'getLaneDetails', docblock: null, modifiers: [], params: [{name: 'index', type: null}], returns: null},
          {name: 'wireEventBus', docblock: null, modifiers: [], params: [], returns: null},
          {name: 'hideEditableLane', docblock: null, modifiers: [], params: [], returns: null},
          {name: 'showEditableLane', docblock: null, modifiers: [], params: [], returns: null},
          {name: 'addNewLane', docblock: null, modifiers: [], params: [{name: 'params', type: null}], returns: null},
          {name: 'groupName', docblock: null, modifiers: ['get'], params: [], returns: null}
        ],
        displayName: 'BoardContainer',
        props: {
          t: {defaultValue: {value: 'v=>v', computed: !1}, type: {name: 'func'}, required: !1, description: ''},
          onDataChange: {
            defaultValue: {value: '() => {}', computed: !1},
            type: {name: 'func'},
            required: !1,
            description: ''
          },
          handleDragStart: {
            defaultValue: {value: '() => {}', computed: !1},
            type: {name: 'func'},
            required: !1,
            description: ''
          },
          handleDragEnd: {
            defaultValue: {value: '() => {}', computed: !1},
            type: {name: 'func'},
            required: !1,
            description: ''
          },
          handleLaneDragStart: {
            defaultValue: {value: '() => {}', computed: !1},
            type: {name: 'func'},
            required: !1,
            description: ''
          },
          handleLaneDragEnd: {
            defaultValue: {value: '() => {}', computed: !1},
            type: {name: 'func'},
            required: !1,
            description: ''
          },
          onLaneAdd: {
            defaultValue: {value: '() => {}', computed: !1},
            type: {name: 'func'},
            required: !1,
            description: ''
          },
          onLaneDelete: {
            defaultValue: {value: '() => {}', computed: !1},
            type: {name: 'func'},
            required: !1,
            description: ''
          },
          onCardMoveAcrossLanes: {
            defaultValue: {value: '() => {}', computed: !1},
            type: {name: 'func'},
            required: !1,
            description: ''
          },
          onLaneUpdate: {
            defaultValue: {value: '() => {}', computed: !1},
            type: {name: 'func'},
            required: !1,
            description: ''
          },
          editable: {defaultValue: {value: 'false', computed: !1}, type: {name: 'bool'}, required: !1, description: ''},
          canAddLanes: {
            defaultValue: {value: 'false', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: ''
          },
          hideCardDeleteIcon: {
            defaultValue: {value: 'false', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: ''
          },
          draggable: {
            defaultValue: {value: 'false', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: ''
          },
          collapsibleLanes: {
            defaultValue: {value: 'false', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: ''
          },
          laneDraggable: {
            defaultValue: {value: 'true', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: ''
          },
          cardDraggable: {
            defaultValue: {value: 'true', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: ''
          },
          cardDragClass: {
            defaultValue: {value: "'react_trello_dragClass'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: ''
          },
          laneDragClass: {
            defaultValue: {value: "'react_trello_dragLaneClass'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: ''
          },
          id: {type: {name: 'string'}, required: !1, description: ''},
          components: {type: {name: 'object'}, required: !1, description: ''},
          actions: {type: {name: 'object'}, required: !1, description: ''},
          data: {type: {name: 'object'}, required: !0, description: ''},
          reducerData: {type: {name: 'object'}, required: !1, description: ''},
          eventBusHandle: {type: {name: 'func'}, required: !1, description: ''},
          onLaneScroll: {type: {name: 'func'}, required: !1, description: ''},
          onCardClick: {type: {name: 'func'}, required: !1, description: ''},
          onCardDelete: {type: {name: 'func'}, required: !1, description: ''},
          onCardAdd: {type: {name: 'func'}, required: !1, description: ''},
          onLaneClick: {type: {name: 'func'}, required: !1, description: ''},
          laneSortFunction: {type: {name: 'func'}, required: !1, description: ''},
          style: {type: {name: 'object'}, required: !1, description: ''},
          tagStyle: {type: {name: 'object'}, required: !1, description: ''}
        }
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/controllers/BoardContainer.js'] = {
            name: 'BoardContainer',
            docgenInfo: BoardContainer_BoardContainer.__docgenInfo,
            path: 'src/controllers/BoardContainer.js'
          })
      var redux_logger = __webpack_require__(379),
        redux_logger_default = __webpack_require__.n(redux_logger),
        createTranslate = __webpack_require__(107),
        toConsumableArray = __webpack_require__(174),
        toConsumableArray_default = __webpack_require__.n(toConsumableArray),
        immutability_helper = (__webpack_require__(23),
        __webpack_require__(16),
        __webpack_require__(19),
        __webpack_require__(24)),
        immutability_helper_default = __webpack_require__.n(immutability_helper),
        LaneHelper = {
          initialiseLanes: function(state, _ref) {
            var newLanes = _ref.lanes.map(function(lane) {
              return (
                (lane.currentPage = 1),
                lane.cards &&
                  lane.cards.forEach(function(c) {
                    return (c.laneId = lane.id)
                  }),
                lane
              )
            })
            return immutability_helper_default()(state, {lanes: {$set: newLanes}})
          },
          paginateLane: function(state, _ref2) {
            var laneId = _ref2.laneId,
              newCards = _ref2.newCards,
              nextPage = _ref2.nextPage,
              updatedLanes = LaneHelper.appendCardsToLane(state, {laneId: laneId, newCards: newCards})
            return (
              (updatedLanes.find(function(lane) {
                return lane.id === laneId
              }).currentPage = nextPage),
              immutability_helper_default()(state, {lanes: {$set: updatedLanes}})
            )
          },
          appendCardsToLane: function(state, _ref3) {
            var laneId = _ref3.laneId,
              newCards = _ref3.newCards,
              index = _ref3.index,
              lane = state.lanes.find(function(lane) {
                return lane.id === laneId
              })
            return (
              (newCards = newCards
                .map(function(c) {
                  return immutability_helper_default()(c, {laneId: {$set: laneId}})
                })
                .filter(function(c) {
                  return (
                    null ==
                    lane.cards.find(function(card) {
                      return card.id === c.id
                    })
                  )
                })),
              state.lanes.map(function(lane) {
                if (lane.id === laneId) {
                  if (void 0 !== index)
                    return immutability_helper_default()(lane, {
                      cards: {$splice: [[index, 0].concat(toConsumableArray_default()(newCards))]}
                    })
                  var cardsToUpdate = [].concat(
                    toConsumableArray_default()(lane.cards),
                    toConsumableArray_default()(newCards)
                  )
                  return immutability_helper_default()(lane, {cards: {$set: cardsToUpdate}})
                }
                return lane
              })
            )
          },
          appendCardToLane: function(state, _ref4) {
            var laneId = _ref4.laneId,
              card = _ref4.card,
              index = _ref4.index,
              newLanes = LaneHelper.appendCardsToLane(state, {laneId: laneId, newCards: [card], index: index})
            return immutability_helper_default()(state, {lanes: {$set: newLanes}})
          },
          addLane: function(state, lane) {
            var newLane = objectSpread_default()({id: v1_default()(), cards: []}, lane)
            return immutability_helper_default()(state, {lanes: {$push: [newLane]}})
          },
          updateLane: function(state, updatedLane) {
            var newLanes = state.lanes.map(function(lane) {
              return updatedLane.id == lane.id ? objectSpread_default()({}, lane, updatedLane) : lane
            })
            return immutability_helper_default()(state, {lanes: {$set: newLanes}})
          },
          removeCardFromLane: function(state, _ref5) {
            var laneId = _ref5.laneId,
              cardId = _ref5.cardId,
              lanes = state.lanes.map(function(lane) {
                if (lane.id === laneId) {
                  var newCards = lane.cards.filter(function(card) {
                    return card.id !== cardId
                  })
                  return immutability_helper_default()(lane, {cards: {$set: newCards}})
                }
                return lane
              })
            return immutability_helper_default()(state, {lanes: {$set: lanes}})
          },
          moveCardAcrossLanes: function(state, _ref6) {
            var fromLaneId = _ref6.fromLaneId,
              toLaneId = _ref6.toLaneId,
              cardId = _ref6.cardId,
              index = _ref6.index,
              cardToMove = null,
              interimLanes = state.lanes.map(function(lane) {
                if (lane.id === fromLaneId) {
                  cardToMove = lane.cards.find(function(card) {
                    return card.id === cardId
                  })
                  var newCards = lane.cards.filter(function(card) {
                    return card.id !== cardId
                  })
                  return immutability_helper_default()(lane, {cards: {$set: newCards}})
                }
                return lane
              }),
              updatedState = immutability_helper_default()(state, {lanes: {$set: interimLanes}})
            return LaneHelper.appendCardToLane(updatedState, {laneId: toLaneId, card: cardToMove, index: index})
          },
          updateCardsForLane: function(state, _ref7) {
            var laneId = _ref7.laneId,
              cards = _ref7.cards,
              lanes = state.lanes.map(function(lane) {
                return lane.id === laneId ? immutability_helper_default()(lane, {cards: {$set: cards}}) : lane
              })
            return immutability_helper_default()(state, {lanes: {$set: lanes}})
          },
          updateLanes: function(state, lanes) {
            return objectSpread_default()({}, state, {lanes: lanes})
          },
          moveLane: function(state, _ref8) {
            var oldIndex = _ref8.oldIndex,
              newIndex = _ref8.newIndex,
              laneToMove = state.lanes[oldIndex],
              tempState = immutability_helper_default()(state, {lanes: {$splice: [[oldIndex, 1]]}})
            return immutability_helper_default()(tempState, {lanes: {$splice: [[newIndex, 0, laneToMove]]}})
          },
          removeLane: function(state, _ref9) {
            var laneId = _ref9.laneId,
              updatedLanes = state.lanes.filter(function(lane) {
                return lane.id !== laneId
              })
            return immutability_helper_default()(state, {lanes: {$set: updatedLanes}})
          }
        },
        helpers_LaneHelper = LaneHelper,
        BoardReducer = function() {
          var state = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {lanes: []},
            action = 1 < arguments.length ? arguments[1] : void 0,
            payload = action.payload,
            type = action.type
          return 'LOAD_BOARD' === type
            ? helpers_LaneHelper.initialiseLanes(state, payload)
            : 'ADD_CARD' === type
              ? helpers_LaneHelper.appendCardToLane(state, payload)
              : 'REMOVE_CARD' === type
                ? helpers_LaneHelper.removeCardFromLane(state, payload)
                : 'MOVE_CARD' === type
                  ? helpers_LaneHelper.moveCardAcrossLanes(state, payload)
                  : 'UPDATE_CARDS' === type
                    ? helpers_LaneHelper.updateCardsForLane(state, payload)
                    : 'UPDATE_LANES' === type
                      ? helpers_LaneHelper.updateLanes(state, payload)
                      : 'PAGINATE_LANE' === type
                        ? helpers_LaneHelper.paginateLane(state, payload)
                        : 'MOVE_LANE' === type
                          ? helpers_LaneHelper.moveLane(state, payload)
                          : 'REMOVE_LANE' === type
                            ? helpers_LaneHelper.removeLane(state, payload)
                            : 'ADD_LANE' === type
                              ? helpers_LaneHelper.addLane(state, payload)
                              : state
        },
        middlewares = Object({NODE_ENV: 'production', NODE_PATH: '', PUBLIC_URL: '.'}).REDUX_LOGGING
          ? [redux_logger_default.a]
          : [],
        Board_Board = (function(_Component) {
          function Board(_ref) {
            var _this,
              id = _ref.id
            return (
              classCallCheck_default()(this, Board),
              (_this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Board).call(this))),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'getStore',
                function() {
                  return Object(redux.createStore)(BoardReducer, redux.applyMiddleware.apply(void 0, middlewares))
                }
              ),
              (_this.store = _this.getStore()),
              (_this.id = id || v1_default()()),
              _this
            )
          }
          return (
            inherits_default()(Board, _Component),
            createClass_default()(Board, [
              {
                key: 'render',
                value: function() {
                  var _this$props = this.props,
                    className = (_this$props.id, _this$props.className),
                    components = _this$props.components,
                    allClassNames = classnames_default()('react-trello-board', className || '')
                  return react_default.a.createElement(
                    lib.Provider,
                    {store: this.store},
                    react_default.a.createElement(
                      react_default.a.Fragment,
                      null,
                      react_default.a.createElement(components.GlobalStyle, null),
                      react_default.a.createElement(
                        controllers_BoardContainer,
                        extends_default()({id: this.id}, this.props, {className: allClassNames})
                      )
                    )
                  )
                }
              }
            ]),
            Board
          )
        })(react.Component)
      ;(Board_Board.__docgenInfo = {
        description: '',
        methods: [{name: 'getStore', docblock: null, modifiers: [], params: [], returns: null}],
        displayName: 'Board'
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/controllers/Board.js'] = {
            name: 'Board',
            docgenInfo: Board_Board.__docgenInfo,
            path: 'src/controllers/Board.js'
          })
      __webpack_require__(17), __webpack_require__(20)
      var REPLACE_TABLE = defineProperty_default()(
          {
            addCardLink: 'components.Card',
            customLaneHeader: 'components.LaneHeader',
            newLaneTemplate: 'components.NewLaneSection',
            newCardTemplate: 'components.NewCardForm',
            children: 'components.Card',
            customCardLayout: 'components.Card',
            addLaneTitle: '`t` function with key "Add another lane"'
          },
          'addCardLink',
          '`t` function with key "Click to add card"'
        ),
        deprecationWarnings = function(props) {
          Object.keys(REPLACE_TABLE).forEach(function(key) {
            var prop, use
            props.hasOwnProperty(key) &&
              ((use = REPLACE_TABLE[(prop = key)]),
              console.warn(
                "react-trello property '"
                  .concat(prop, "' is removed. Use '")
                  .concat(use, "' instead. More - https://github.com/rcdexta/react-trello/blob/master/UPGRADE.md")
              ))
          })
        },
        Base = __webpack_require__(9),
        autosize = __webpack_require__(172),
        autosize_default = __webpack_require__.n(autosize),
        InlineInput_InlineInputController = (function(_React$Component) {
          function InlineInputController() {
            var _getPrototypeOf2, _this
            classCallCheck_default()(this, InlineInputController)
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++)
              args[_key] = arguments[_key]
            return (
              (_this = possibleConstructorReturn_default()(
                this,
                (_getPrototypeOf2 = getPrototypeOf_default()(InlineInputController)).call.apply(
                  _getPrototypeOf2,
                  [this].concat(args)
                )
              )),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'onFocus',
                function(e) {
                  return e.target.select()
                }
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'onMouseDown',
                function(e) {
                  document.activeElement != e.target && (e.preventDefault(), _this.refInput.focus())
                }
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'onBlur',
                function() {
                  _this.updateValue()
                }
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'onKeyDown',
                function(e) {
                  13 == e.keyCode && (_this.refInput.blur(), e.preventDefault()),
                    27 == e.keyCode && (_this.setValue(_this.props.value), _this.refInput.blur(), e.preventDefault()),
                    9 == e.keyCode &&
                      (0 == _this.getValue().length && _this.props.onCancel(),
                      _this.refInput.blur(),
                      e.preventDefault())
                }
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'getValue',
                function() {
                  return _this.refInput.value
                }
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'setValue',
                function(value) {
                  return (_this.refInput.value = value)
                }
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'updateValue',
                function() {
                  _this.getValue() != _this.props.value && _this.props.onSave(_this.getValue())
                }
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'setRef',
                function(ref) {
                  ;(_this.refInput = ref), 'none' != _this.props.resize && autosize_default()(_this.refInput)
                }
              ),
              _this
            )
          }
          return (
            inherits_default()(InlineInputController, _React$Component),
            createClass_default()(InlineInputController, [
              {
                key: 'componentWillReceiveProps',
                value: function(nextProps) {
                  this.setValue(nextProps.value)
                }
              },
              {
                key: 'render',
                value: function() {
                  var _this$props = this.props,
                    autoFocus = _this$props.autoFocus,
                    border = _this$props.border,
                    value = _this$props.value,
                    placeholder = _this$props.placeholder
                  return react_default.a.createElement(Base.m, {
                    ref: this.setRef,
                    border: border,
                    onMouseDown: this.onMouseDown,
                    onFocus: this.onFocus,
                    onBlur: this.onBlur,
                    onKeyDown: this.onKeyDown,
                    placeholder: 0 == value.length ? void 0 : placeholder,
                    defaultValue: value,
                    autoComplete: 'off',
                    autoCorrect: 'off',
                    autoCapitalize: 'off',
                    spellCheck: 'false',
                    dataGramm: 'false',
                    rows: 1,
                    autoFocus: autoFocus
                  })
                }
              }
            ]),
            InlineInputController
          )
        })(react_default.a.Component)
      ;(InlineInput_InlineInputController.propTypes = {
        onSave: prop_types_default.a.func,
        border: prop_types_default.a.bool,
        placeholder: prop_types_default.a.string,
        value: prop_types_default.a.string,
        autoFocus: prop_types_default.a.bool,
        resize: prop_types_default.a.oneOf(['none', 'vertical', 'horizontal'])
      }),
        (InlineInput_InlineInputController.defaultProps = {
          onSave: function() {},
          placeholder: '',
          value: '',
          border: !1,
          autoFocus: !1,
          resize: 'none'
        })
      var InlineInput = InlineInput_InlineInputController
      ;(InlineInput_InlineInputController.__docgenInfo = {
        description: '',
        methods: [
          {name: 'onFocus', docblock: null, modifiers: [], params: [{name: 'e', type: null}], returns: null},
          {name: 'onMouseDown', docblock: null, modifiers: [], params: [{name: 'e', type: null}], returns: null},
          {name: 'onBlur', docblock: null, modifiers: [], params: [], returns: null},
          {name: 'onKeyDown', docblock: null, modifiers: [], params: [{name: 'e', type: null}], returns: null},
          {name: 'getValue', docblock: null, modifiers: [], params: [], returns: null},
          {name: 'setValue', docblock: null, modifiers: [], params: [{name: 'value', type: null}], returns: null},
          {name: 'updateValue', docblock: null, modifiers: [], params: [], returns: null},
          {name: 'setRef', docblock: null, modifiers: [], params: [{name: 'ref', type: null}], returns: null}
        ],
        displayName: 'InlineInputController',
        props: {
          onSave: {
            defaultValue: {value: '() => {}', computed: !1},
            type: {name: 'func'},
            required: !1,
            description: ''
          },
          placeholder: {
            defaultValue: {value: "''", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: ''
          },
          value: {defaultValue: {value: "''", computed: !1}, type: {name: 'string'}, required: !1, description: ''},
          border: {defaultValue: {value: 'false', computed: !1}, type: {name: 'bool'}, required: !1, description: ''},
          autoFocus: {
            defaultValue: {value: 'false', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: ''
          },
          resize: {
            defaultValue: {value: "'none'", computed: !1},
            type: {
              name: 'enum',
              value: [
                {value: "'none'", computed: !1},
                {value: "'vertical'", computed: !1},
                {value: "'horizontal'", computed: !1}
              ]
            },
            required: !1,
            description: ''
          }
        }
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/widgets/InlineInput.js'] = {
            name: 'InlineInputController',
            docgenInfo: InlineInput_InlineInputController.__docgenInfo,
            path: 'src/widgets/InlineInput.js'
          })
      var Elements = __webpack_require__(25),
        LaneMenu = (prop_types_default.a.elementType,
        function(_ref) {
          var t = _ref.t,
            onDelete = _ref.onDelete
          return react_default.a.createElement(
            react_popopo_dist.Popover,
            {
              position: 'bottom',
              PopoverContainer: Base.h,
              PopoverContent: Base.i,
              trigger: react_default.a.createElement(Elements.m, null, '⋮')
            },
            react_default.a.createElement(
              Elements.j,
              null,
              react_default.a.createElement(Elements.l, null, t('Lane actions')),
              react_default.a.createElement(Elements.f, null, react_default.a.createElement(Elements.h, null, '✖'))
            ),
            react_default.a.createElement(
              Elements.i,
              null,
              react_default.a.createElement(Elements.k, {onClick: onDelete}, t('Delete lane'))
            )
          )
        }),
        LaneHeader_LaneMenu = LaneMenu
      ;(LaneMenu.__docgenInfo = {description: '', methods: [], displayName: 'LaneMenu'}),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Lane/LaneHeader/LaneMenu.js'] = {
            name: 'LaneMenu',
            docgenInfo: LaneMenu.__docgenInfo,
            path: 'src/components/Lane/LaneHeader/LaneMenu.js'
          })
      var LaneHeaderComponent = function(_ref) {
        var updateTitle = _ref.updateTitle,
          canAddLanes = _ref.canAddLanes,
          onDelete = _ref.onDelete,
          onDoubleClick = _ref.onDoubleClick,
          editLaneTitle = _ref.editLaneTitle,
          label = _ref.label,
          title = _ref.title,
          titleStyle = _ref.titleStyle,
          labelStyle = _ref.labelStyle,
          t = _ref.t,
          laneDraggable = _ref.laneDraggable
        return react_default.a.createElement(
          Base.o,
          {onDoubleClick: onDoubleClick, editLaneTitle: editLaneTitle},
          react_default.a.createElement(
            Base.x,
            {draggable: laneDraggable, style: titleStyle},
            editLaneTitle
              ? react_default.a.createElement(InlineInput, {
                  value: title,
                  border: !0,
                  placeholder: t('placeholder.title'),
                  resize: 'vertical',
                  onSave: updateTitle
                })
              : title
          ),
          label &&
            react_default.a.createElement(
              Base.t,
              null,
              react_default.a.createElement('span', {style: labelStyle}, label)
            ),
          canAddLanes && react_default.a.createElement(LaneHeader_LaneMenu, {t: t, onDelete: onDelete})
        )
      }
      ;(LaneHeaderComponent.propTypes = {
        updateTitle: prop_types_default.a.func,
        editLaneTitle: prop_types_default.a.bool,
        canAddLanes: prop_types_default.a.bool,
        laneDraggable: prop_types_default.a.bool,
        label: prop_types_default.a.string,
        title: prop_types_default.a.string,
        onDelete: prop_types_default.a.func,
        onDoubleClick: prop_types_default.a.func,
        t: prop_types_default.a.func.isRequired
      }),
        (LaneHeaderComponent.defaultProps = {updateTitle: function() {}, editLaneTitle: !1, canAddLanes: !1})
      var LaneHeader = LaneHeaderComponent
      ;(LaneHeaderComponent.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'LaneHeaderComponent',
        props: {
          updateTitle: {
            defaultValue: {value: '() => {}', computed: !1},
            type: {name: 'func'},
            required: !1,
            description: ''
          },
          editLaneTitle: {
            defaultValue: {value: 'false', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: ''
          },
          canAddLanes: {
            defaultValue: {value: 'false', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: ''
          },
          laneDraggable: {type: {name: 'bool'}, required: !1, description: ''},
          label: {type: {name: 'string'}, required: !1, description: ''},
          title: {type: {name: 'string'}, required: !1, description: ''},
          onDelete: {type: {name: 'func'}, required: !1, description: ''},
          onDoubleClick: {type: {name: 'func'}, required: !1, description: ''},
          t: {type: {name: 'func'}, required: !0, description: ''}
        }
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Lane/LaneHeader.js'] = {
            name: 'LaneHeaderComponent',
            docgenInfo: LaneHeaderComponent.__docgenInfo,
            path: 'src/components/Lane/LaneHeader.js'
          })
      var Tag = __webpack_require__(173),
        DeleteButton = __webpack_require__(110),
        Card_Card = (function(_Component) {
          function Card() {
            var _getPrototypeOf2, _this
            classCallCheck_default()(this, Card)
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++)
              args[_key] = arguments[_key]
            return (
              (_this = possibleConstructorReturn_default()(
                this,
                (_getPrototypeOf2 = getPrototypeOf_default()(Card)).call.apply(_getPrototypeOf2, [this].concat(args))
              )),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'onDelete',
                function(e) {
                  _this.props.onDelete(), e.stopPropagation()
                }
              ),
              _this
            )
          }
          return (
            inherits_default()(Card, _Component),
            createClass_default()(Card, [
              {
                key: 'render',
                value: function() {
                  var _this$props = this.props,
                    showDeleteButton = _this$props.showDeleteButton,
                    style = _this$props.style,
                    tagStyle = _this$props.tagStyle,
                    onClick = _this$props.onClick,
                    className = (_this$props.onDelete, _this$props.className),
                    id = _this$props.id,
                    title = _this$props.title,
                    label = _this$props.label,
                    description = _this$props.description,
                    tags = _this$props.tags,
                    cardDraggable = _this$props.cardDraggable
                  return react_default.a.createElement(
                    Base.q,
                    {'data-id': id, onClick: onClick, style: style, className: className},
                    react_default.a.createElement(
                      Base.d,
                      null,
                      react_default.a.createElement(Base.f, {draggable: cardDraggable}, title),
                      react_default.a.createElement(Base.e, null, label),
                      showDeleteButton && react_default.a.createElement(DeleteButton.a, {onClick: this.onDelete})
                    ),
                    react_default.a.createElement(Base.j, null, description),
                    tags &&
                      0 < tags.length &&
                      react_default.a.createElement(
                        Base.k,
                        null,
                        tags.map(function(tag) {
                          return react_default.a.createElement(
                            Tag.a,
                            extends_default()({key: tag.title}, tag, {tagStyle: tagStyle})
                          )
                        })
                      )
                  )
                }
              }
            ]),
            Card
          )
        })(react.Component)
      ;(Card_Card.propTypes = {
        showDeleteButton: prop_types_default.a.bool,
        onDelete: prop_types_default.a.func,
        onClick: prop_types_default.a.func,
        style: prop_types_default.a.object,
        tagStyle: prop_types_default.a.object,
        className: prop_types_default.a.string,
        id: prop_types_default.a.string.isRequired,
        title: prop_types_default.a.string.isRequired,
        label: prop_types_default.a.string,
        description: prop_types_default.a.string,
        tags: prop_types_default.a.array
      }),
        (Card_Card.defaultProps = {
          showDeleteButton: !0,
          onDelete: function() {},
          onClick: function() {},
          style: {},
          tagStyle: {},
          title: 'no title',
          description: '',
          label: '',
          tags: [],
          className: ''
        })
      var components_Card = Card_Card
      ;(Card_Card.__docgenInfo = {
        description: '',
        methods: [{name: 'onDelete', docblock: null, modifiers: [], params: [{name: 'e', type: null}], returns: null}],
        displayName: 'Card',
        props: {
          showDeleteButton: {
            defaultValue: {value: 'true', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: ''
          },
          onDelete: {
            defaultValue: {value: '() => {}', computed: !1},
            type: {name: 'func'},
            required: !1,
            description: ''
          },
          onClick: {
            defaultValue: {value: '() => {}', computed: !1},
            type: {name: 'func'},
            required: !1,
            description: ''
          },
          style: {defaultValue: {value: '{}', computed: !1}, type: {name: 'object'}, required: !1, description: ''},
          tagStyle: {defaultValue: {value: '{}', computed: !1}, type: {name: 'object'}, required: !1, description: ''},
          title: {
            defaultValue: {value: "'no title'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: ''
          },
          description: {
            defaultValue: {value: "''", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: ''
          },
          label: {defaultValue: {value: "''", computed: !1}, type: {name: 'string'}, required: !1, description: ''},
          tags: {defaultValue: {value: '[]', computed: !1}, type: {name: 'array'}, required: !1, description: ''},
          className: {defaultValue: {value: "''", computed: !1}, type: {name: 'string'}, required: !1, description: ''},
          id: {type: {name: 'string'}, required: !0, description: ''}
        }
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Card.js'] = {
            name: 'Card',
            docgenInfo: Card_Card.__docgenInfo,
            path: 'src/components/Card.js'
          })
      var taggedTemplateLiteral = __webpack_require__(7),
        taggedTemplateLiteral_default = __webpack_require__.n(taggedTemplateLiteral),
        styled_components_browser_cjs = __webpack_require__(8),
        styled_components_browser_cjs_default = __webpack_require__.n(styled_components_browser_cjs)
      function _templateObject3() {
        var data = taggedTemplateLiteral_default()([
          '\n  display: inline-block;\n  margin: 0 2px;\n  width: 4px;\n  height: 18px;\n  border-radius: 4px;\n  animation: ',
          ' 1s ease-in-out infinite;\n  background-color: #777;\n\n  &:nth-child(1) {\n    animation-delay: 0.0001s;\n  }\n  &:nth-child(2) {\n    animation-delay: 0.09s;\n  }\n  &:nth-child(3) {\n    animation-delay: 0.18s;\n  }\n  &:nth-child(4) {\n    animation-delay: 0.27s;\n  }\n'
        ])
        return (
          (_templateObject3 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject2() {
        var data = taggedTemplateLiteral_default()(['\n  text-align: center;\n  margin: 15px 0;\n'])
        return (
          (_templateObject2 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject() {
        var data = taggedTemplateLiteral_default()([
          '\n    0% {\n      transform: scale(1);\n    }\n    20% {\n      transform: scale(1, 2.2);\n    }\n    40% {\n      transform: scale(1);\n    }\n'
        ])
        return (
          (_templateObject = function() {
            return data
          }),
          data
        )
      }
      var keyframeAnimation = Object(styled_components_browser_cjs.keyframes)(_templateObject()),
        LoaderDiv = styled_components_browser_cjs_default.a.div(_templateObject2()),
        LoadingBar = styled_components_browser_cjs_default.a.div(_templateObject3(), keyframeAnimation),
        Loader = function() {
          return react_default.a.createElement(
            LoaderDiv,
            null,
            react_default.a.createElement(LoadingBar, null),
            react_default.a.createElement(LoadingBar, null),
            react_default.a.createElement(LoadingBar, null),
            react_default.a.createElement(LoadingBar, null)
          )
        },
        components_Loader = Loader
      ;(Loader.__docgenInfo = {description: '', methods: [], displayName: 'Loader'}),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Loader.js'] = {
            name: 'Loader',
            docgenInfo: Loader.__docgenInfo,
            path: 'src/components/Loader.js'
          })
      var NewLaneTitleEditor_NewLaneTitleEditor = (function(_React$Component) {
        function NewLaneTitleEditor() {
          var _getPrototypeOf2, _this
          classCallCheck_default()(this, NewLaneTitleEditor)
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++)
            args[_key] = arguments[_key]
          return (
            (_this = possibleConstructorReturn_default()(
              this,
              (_getPrototypeOf2 = getPrototypeOf_default()(NewLaneTitleEditor)).call.apply(
                _getPrototypeOf2,
                [this].concat(args)
              )
            )),
            defineProperty_default()(
              assertThisInitialized_default()(assertThisInitialized_default()(_this)),
              'onKeyDown',
              function(e) {
                13 == e.keyCode && (_this.refInput.blur(), _this.props.onSave(), e.preventDefault()),
                  27 == e.keyCode && (_this.cancel(), e.preventDefault()),
                  9 == e.keyCode &&
                    (0 == _this.getValue().length ? _this.cancel() : _this.props.onSave(), e.preventDefault())
              }
            ),
            defineProperty_default()(
              assertThisInitialized_default()(assertThisInitialized_default()(_this)),
              'cancel',
              function() {
                _this.setValue(''), _this.props.onCancel(), _this.refInput.blur()
              }
            ),
            defineProperty_default()(
              assertThisInitialized_default()(assertThisInitialized_default()(_this)),
              'getValue',
              function() {
                return _this.refInput.value
              }
            ),
            defineProperty_default()(
              assertThisInitialized_default()(assertThisInitialized_default()(_this)),
              'setValue',
              function(value) {
                return (_this.refInput.value = value)
              }
            ),
            defineProperty_default()(
              assertThisInitialized_default()(assertThisInitialized_default()(_this)),
              'saveValue',
              function() {
                _this.getValue() != _this.props.value && _this.props.onSave(_this.getValue())
              }
            ),
            defineProperty_default()(
              assertThisInitialized_default()(assertThisInitialized_default()(_this)),
              'focus',
              function() {
                return _this.refInput.focus()
              }
            ),
            defineProperty_default()(
              assertThisInitialized_default()(assertThisInitialized_default()(_this)),
              'setRef',
              function(ref) {
                ;(_this.refInput = ref), 'none' != _this.props.resize && autosize_default()(_this.refInput)
              }
            ),
            _this
          )
        }
        return (
          inherits_default()(NewLaneTitleEditor, _React$Component),
          createClass_default()(NewLaneTitleEditor, [
            {
              key: 'render',
              value: function() {
                var _this$props = this.props,
                  autoFocus = _this$props.autoFocus,
                  resize = _this$props.resize,
                  border = _this$props.border,
                  autoResize = _this$props.autoResize,
                  value = _this$props.value,
                  placeholder = _this$props.placeholder
                return react_default.a.createElement(Base.m, {
                  style: {resize: resize},
                  ref: this.setRef,
                  border: border,
                  onKeyDown: this.onKeyDown,
                  placeholder: 0 == value.length ? void 0 : placeholder,
                  defaultValue: value,
                  rows: 3,
                  autoResize: autoResize,
                  autoFocus: autoFocus
                })
              }
            }
          ]),
          NewLaneTitleEditor
        )
      })(react_default.a.Component)
      ;(NewLaneTitleEditor_NewLaneTitleEditor.propTypes = {
        onSave: prop_types_default.a.func,
        onCancel: prop_types_default.a.func,
        border: prop_types_default.a.bool,
        placeholder: prop_types_default.a.string,
        value: prop_types_default.a.string,
        autoFocus: prop_types_default.a.bool,
        autoResize: prop_types_default.a.bool,
        resize: prop_types_default.a.oneOf(['none', 'vertical', 'horizontal'])
      }),
        (NewLaneTitleEditor_NewLaneTitleEditor.defaultProps = {
          inputRef: function() {},
          onSave: function() {},
          onCancel: function() {},
          placeholder: '',
          value: '',
          border: !1,
          autoFocus: !1,
          autoResize: !1,
          resize: 'none'
        })
      var widgets_NewLaneTitleEditor = NewLaneTitleEditor_NewLaneTitleEditor
      ;(NewLaneTitleEditor_NewLaneTitleEditor.__docgenInfo = {
        description: '',
        methods: [
          {name: 'onKeyDown', docblock: null, modifiers: [], params: [{name: 'e', type: null}], returns: null},
          {name: 'cancel', docblock: null, modifiers: [], params: [], returns: null},
          {name: 'getValue', docblock: null, modifiers: [], params: [], returns: null},
          {name: 'setValue', docblock: null, modifiers: [], params: [{name: 'value', type: null}], returns: null},
          {name: 'saveValue', docblock: null, modifiers: [], params: [], returns: null},
          {name: 'focus', docblock: null, modifiers: [], params: [], returns: null},
          {name: 'setRef', docblock: null, modifiers: [], params: [{name: 'ref', type: null}], returns: null}
        ],
        displayName: 'NewLaneTitleEditor',
        props: {
          inputRef: {defaultValue: {value: '() => {}', computed: !1}, required: !1},
          onSave: {
            defaultValue: {value: '() => {}', computed: !1},
            type: {name: 'func'},
            required: !1,
            description: ''
          },
          onCancel: {
            defaultValue: {value: '() => {}', computed: !1},
            type: {name: 'func'},
            required: !1,
            description: ''
          },
          placeholder: {
            defaultValue: {value: "''", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: ''
          },
          value: {defaultValue: {value: "''", computed: !1}, type: {name: 'string'}, required: !1, description: ''},
          border: {defaultValue: {value: 'false', computed: !1}, type: {name: 'bool'}, required: !1, description: ''},
          autoFocus: {
            defaultValue: {value: 'false', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: ''
          },
          autoResize: {
            defaultValue: {value: 'false', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: ''
          },
          resize: {
            defaultValue: {value: "'none'", computed: !1},
            type: {
              name: 'enum',
              value: [
                {value: "'none'", computed: !1},
                {value: "'vertical'", computed: !1},
                {value: "'horizontal'", computed: !1}
              ]
            },
            required: !1,
            description: ''
          }
        }
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/widgets/NewLaneTitleEditor.js'] = {
            name: 'NewLaneTitleEditor',
            docgenInfo: NewLaneTitleEditor_NewLaneTitleEditor.__docgenInfo,
            path: 'src/widgets/NewLaneTitleEditor.js'
          })
      var build = __webpack_require__(381),
        build_default = __webpack_require__.n(build),
        NewLaneForm_NewLane = (function(_Component) {
          function NewLane() {
            var _getPrototypeOf2, _this
            classCallCheck_default()(this, NewLane)
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++)
              args[_key] = arguments[_key]
            return (
              (_this = possibleConstructorReturn_default()(
                this,
                (_getPrototypeOf2 = getPrototypeOf_default()(NewLane)).call.apply(_getPrototypeOf2, [this].concat(args))
              )),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'handleSubmit',
                function() {
                  _this.props.onAdd({title: _this.getValue()})
                }
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'getValue',
                function() {
                  return _this.refInput.getValue()
                }
              ),
              defineProperty_default()(
                assertThisInitialized_default()(assertThisInitialized_default()(_this)),
                'onClickOutside',
                function() {
                  0 < _this.getValue().length ? _this.handleSubmit() : _this.props.onCancel()
                }
              ),
              _this
            )
          }
          return (
            inherits_default()(NewLane, _Component),
            createClass_default()(NewLane, [
              {
                key: 'render',
                value: function() {
                  var _this2 = this,
                    _this$props = this.props,
                    onCancel = _this$props.onCancel,
                    t = _this$props.t
                  return react_default.a.createElement(
                    build_default.a,
                    {onClickOutside: this.onClickOutside},
                    react_default.a.createElement(
                      Base.v,
                      null,
                      react_default.a.createElement(
                        Base.p,
                        null,
                        react_default.a.createElement(widgets_NewLaneTitleEditor, {
                          ref: function(_ref) {
                            return (_this2.refInput = _ref)
                          },
                          placeholder: t('placeholder.title'),
                          onCancel: this.props.onCancel,
                          onSave: this.handleSubmit,
                          resize: 'vertical',
                          border: !0,
                          autoFocus: !0
                        })
                      ),
                      react_default.a.createElement(
                        Base.r,
                        null,
                        react_default.a.createElement(Elements.a, {onClick: this.handleSubmit}, t('button.Add lane')),
                        react_default.a.createElement(Elements.c, {onClick: onCancel}, t('button.Cancel'))
                      )
                    )
                  )
                }
              }
            ]),
            NewLane
          )
        })(react.Component)
      ;(NewLaneForm_NewLane.propTypes = {
        onCancel: prop_types_default.a.func.isRequired,
        onAdd: prop_types_default.a.func.isRequired,
        t: prop_types_default.a.func.isRequired
      }),
        (NewLaneForm_NewLane.defaultProps = {})
      var NewLaneForm = NewLaneForm_NewLane
      ;(NewLaneForm_NewLane.__docgenInfo = {
        description: '',
        methods: [
          {name: 'handleSubmit', docblock: null, modifiers: [], params: [], returns: null},
          {name: 'getValue', docblock: null, modifiers: [], params: [], returns: null},
          {
            name: 'onClickOutside',
            docblock: null,
            modifiers: [],
            params: [{name: 'a', type: null}, {name: 'b', type: null}, {name: 'c', type: null}],
            returns: null
          }
        ],
        displayName: 'NewLane',
        props: {
          onCancel: {type: {name: 'func'}, required: !0, description: ''},
          onAdd: {type: {name: 'func'}, required: !0, description: ''},
          t: {type: {name: 'func'}, required: !0, description: ''}
        }
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/NewLaneForm.js'] = {
            name: 'NewLane',
            docgenInfo: NewLaneForm_NewLane.__docgenInfo,
            path: 'src/components/NewLaneForm.js'
          })
      var EditableLabel_EditableLabel = (function(_React$Component) {
        function EditableLabel(_ref) {
          var _this,
            _value = _ref.value
          return (
            classCallCheck_default()(this, EditableLabel),
            (_this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(EditableLabel).call(this))),
            defineProperty_default()(
              assertThisInitialized_default()(assertThisInitialized_default()(_this)),
              'getText',
              function(el) {
                return el.innerText
              }
            ),
            defineProperty_default()(
              assertThisInitialized_default()(assertThisInitialized_default()(_this)),
              'onTextChange',
              function(ev) {
                var value = _this.getText(ev.target)
                _this.setState({value: value})
              }
            ),
            defineProperty_default()(
              assertThisInitialized_default()(assertThisInitialized_default()(_this)),
              'onBlur',
              function() {
                _this.props.onChange(_this.state.value)
              }
            ),
            defineProperty_default()(
              assertThisInitialized_default()(assertThisInitialized_default()(_this)),
              'onPaste',
              function(ev) {
                ev.preventDefault()
                var value = ev.clipboardData.getData('text')
                document.execCommand('insertText', !1, value)
              }
            ),
            defineProperty_default()(
              assertThisInitialized_default()(assertThisInitialized_default()(_this)),
              'getClassName',
              function() {
                var placeholder = '' === _this.state.value ? 'comPlainTextContentEditable--has-placeholder' : ''
                return 'comPlainTextContentEditable '.concat(placeholder)
              }
            ),
            defineProperty_default()(
              assertThisInitialized_default()(assertThisInitialized_default()(_this)),
              'onKeyDown',
              function(e) {
                13 === e.keyCode && (_this.props.onChange(_this.state.value), _this.refDiv.blur(), e.preventDefault()),
                  27 === e.keyCode &&
                    ((_this.refDiv.value = _this.props.value),
                    _this.setState({value: _this.props.value}),
                    e.preventDefault(),
                    e.stopPropagation())
              }
            ),
            (_this.state = {value: _value}),
            _this
          )
        }
        return (
          inherits_default()(EditableLabel, _React$Component),
          createClass_default()(EditableLabel, [
            {
              key: 'componentDidMount',
              value: function() {
                this.props.autoFocus && this.refDiv.focus()
              }
            },
            {
              key: 'render',
              value: function() {
                var _this2 = this,
                  placeholder = !(0 < this.props.value.length) && this.props.placeholder
                return react_default.a.createElement('div', {
                  ref: function(_ref2) {
                    return (_this2.refDiv = _ref2)
                  },
                  contentEditable: 'true',
                  className: this.getClassName(),
                  onPaste: this.onPaste,
                  onBlur: this.onBlur,
                  onInput: this.onTextChange,
                  onKeyDown: this.onKeyDown,
                  placeholder: placeholder
                })
              }
            }
          ]),
          EditableLabel
        )
      })(react_default.a.Component)
      ;(EditableLabel_EditableLabel.propTypes = {
        onChange: prop_types_default.a.func,
        placeholder: prop_types_default.a.string,
        autoFocus: prop_types_default.a.bool,
        inline: prop_types_default.a.bool,
        value: prop_types_default.a.string
      }),
        (EditableLabel_EditableLabel.defaultProps = {
          onChange: function() {},
          placeholder: '',
          autoFocus: !1,
          inline: !1,
          value: ''
        })
      var widgets_EditableLabel = EditableLabel_EditableLabel
      ;(EditableLabel_EditableLabel.__docgenInfo = {
        description: '',
        methods: [
          {name: 'getText', docblock: null, modifiers: [], params: [{name: 'el', type: null}], returns: null},
          {name: 'onTextChange', docblock: null, modifiers: [], params: [{name: 'ev', type: null}], returns: null},
          {name: 'onBlur', docblock: null, modifiers: [], params: [], returns: null},
          {name: 'onPaste', docblock: null, modifiers: [], params: [{name: 'ev', type: null}], returns: null},
          {name: 'getClassName', docblock: null, modifiers: [], params: [], returns: null},
          {name: 'onKeyDown', docblock: null, modifiers: [], params: [{name: 'e', type: null}], returns: null}
        ],
        displayName: 'EditableLabel',
        props: {
          onChange: {
            defaultValue: {value: '() => {}', computed: !1},
            type: {name: 'func'},
            required: !1,
            description: ''
          },
          placeholder: {
            defaultValue: {value: "''", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: ''
          },
          autoFocus: {
            defaultValue: {value: 'false', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: ''
          },
          inline: {defaultValue: {value: 'false', computed: !1}, type: {name: 'bool'}, required: !1, description: ''},
          value: {defaultValue: {value: "''", computed: !1}, type: {name: 'string'}, required: !1, description: ''}
        }
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/widgets/EditableLabel.js'] = {
            name: 'EditableLabel',
            docgenInfo: EditableLabel_EditableLabel.__docgenInfo,
            path: 'src/widgets/EditableLabel.js'
          })
      var NewCardForm_NewCardForm = (function(_Component) {
        function NewCardForm() {
          var _getPrototypeOf2, _this
          classCallCheck_default()(this, NewCardForm)
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++)
            args[_key] = arguments[_key]
          return (
            (_this = possibleConstructorReturn_default()(
              this,
              (_getPrototypeOf2 = getPrototypeOf_default()(NewCardForm)).call.apply(
                _getPrototypeOf2,
                [this].concat(args)
              )
            )),
            defineProperty_default()(
              assertThisInitialized_default()(assertThisInitialized_default()(_this)),
              'updateField',
              function(field, value) {
                _this.setState(defineProperty_default()({}, field, value))
              }
            ),
            defineProperty_default()(
              assertThisInitialized_default()(assertThisInitialized_default()(_this)),
              'handleAdd',
              function() {
                _this.props.onAdd(_this.state)
              }
            ),
            _this
          )
        }
        return (
          inherits_default()(NewCardForm, _Component),
          createClass_default()(NewCardForm, [
            {
              key: 'render',
              value: function() {
                var _this2 = this,
                  _this$props = this.props,
                  onCancel = _this$props.onCancel,
                  t = _this$props.t
                return react_default.a.createElement(
                  Base.c,
                  null,
                  react_default.a.createElement(
                    Base.g,
                    null,
                    react_default.a.createElement(
                      Base.d,
                      null,
                      react_default.a.createElement(
                        Base.f,
                        null,
                        react_default.a.createElement(widgets_EditableLabel, {
                          placeholder: t('placeholder.title'),
                          onChange: function(val) {
                            return _this2.updateField('title', val)
                          },
                          autoFocus: !0
                        })
                      ),
                      react_default.a.createElement(
                        Base.e,
                        null,
                        react_default.a.createElement(widgets_EditableLabel, {
                          placeholder: t('placeholder.label'),
                          onChange: function(val) {
                            return _this2.updateField('label', val)
                          }
                        })
                      )
                    ),
                    react_default.a.createElement(
                      Base.j,
                      null,
                      react_default.a.createElement(widgets_EditableLabel, {
                        placeholder: t('placeholder.description'),
                        onChange: function(val) {
                          return _this2.updateField('description', val)
                        }
                      })
                    )
                  ),
                  react_default.a.createElement(Elements.a, {onClick: this.handleAdd}, t('button.Add card')),
                  react_default.a.createElement(Elements.c, {onClick: onCancel}, t('button.Cancel'))
                )
              }
            }
          ]),
          NewCardForm
        )
      })(react.Component)
      ;(NewCardForm_NewCardForm.propTypes = {
        onCancel: prop_types_default.a.func.isRequired,
        onAdd: prop_types_default.a.func.isRequired,
        t: prop_types_default.a.func.isRequired
      }),
        (NewCardForm_NewCardForm.defaultProps = {})
      var components_NewCardForm = NewCardForm_NewCardForm
      ;(NewCardForm_NewCardForm.__docgenInfo = {
        description: '',
        methods: [
          {
            name: 'updateField',
            docblock: null,
            modifiers: [],
            params: [{name: 'field', type: null}, {name: 'value', type: null}],
            returns: null
          },
          {name: 'handleAdd', docblock: null, modifiers: [], params: [], returns: null}
        ],
        displayName: 'NewCardForm',
        props: {
          onCancel: {type: {name: 'func'}, required: !0, description: ''},
          onAdd: {type: {name: 'func'}, required: !0, description: ''},
          t: {type: {name: 'func'}, required: !0, description: ''}
        }
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/NewCardForm.js'] = {
            name: 'NewCardForm',
            docgenInfo: NewCardForm_NewCardForm.__docgenInfo,
            path: 'src/components/NewCardForm.js'
          })
      var src_components = {
          GlobalStyle: Base.l,
          BoardWrapper: Base.b,
          Loader: components_Loader,
          ScrollableLane: Base.u,
          LaneHeader: LaneHeader,
          LaneFooter: function(_ref) {
            var onClick = _ref.onClick,
              collapsed = _ref.collapsed
            return react_default.a.createElement(
              Base.n,
              {onClick: onClick},
              collapsed
                ? react_default.a.createElement(Elements.g, null)
                : react_default.a.createElement(Elements.d, null)
            )
          },
          Section: Base.v,
          NewLaneForm: NewLaneForm,
          NewLaneSection: function(_ref) {
            var t = _ref.t,
              onClick = _ref.onClick
            return react_default.a.createElement(
              Base.s,
              null,
              react_default.a.createElement(Elements.b, {t: t, onClick: onClick}, t('Add another lane'))
            )
          },
          NewCardForm: components_NewCardForm,
          Card: components_Card,
          AddCardLink: function(_ref) {
            var onClick = _ref.onClick,
              t = _ref.t
            return react_default.a.createElement(Base.a, {onClick: onClick}, t('Click to add card'))
          }
        },
        locales = __webpack_require__(135)
      DeleteButton.a,
        (__webpack_exports__.a = function(_ref) {
          var components = _ref.components,
            _ref$lang = _ref.lang,
            lang = void 0 === _ref$lang ? 'en' : _ref$lang,
            otherProps = objectWithoutProperties_default()(_ref, ['components', 'lang'])
          deprecationWarnings(otherProps)
          var translate = Object(createTranslate.a)(locales.a[lang].translation)
          return react_default.a.createElement(
            Board_Board,
            extends_default()(
              {t: translate, components: objectSpread_default()({}, src_components, components)},
              otherProps
            )
          )
        })
    },
    557: function(module, exports, __webpack_require__) {
      var map = {'./nestedObjectAssign': 305, './nestedObjectAssign.js': 305}
      function webpackContext(req) {
        var id = webpackContextResolve(req)
        return __webpack_require__(id)
      }
      function webpackContextResolve(req) {
        var id = map[req]
        if (!(id + 1)) {
          var e = new Error("Cannot find module '" + req + "'")
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        }
        return id
      }
      ;(webpackContext.keys = function() {
        return Object.keys(map)
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 557)
    },
    65: function(module) {
      module.exports = {
        lanes: [
          {
            id: 'PLANNED',
            title: 'Planned Tasks',
            label: '20/70',
            style: {width: 280},
            cards: [
              {id: 'Milk', title: 'Buy milk', label: '15 mins', description: '2 Gallons of milk at the Deli store'},
              {
                id: 'Plan2',
                title: 'Dispose Garbage',
                label: '10 mins',
                description: 'Sort out recyclable and waste as needed'
              },
              {id: 'Plan3', title: 'Write Blog', label: '30 mins', description: 'Can AI make memes?'},
              {id: 'Plan4', title: 'Pay Rent', label: '5 mins', description: 'Transfer to bank account'}
            ]
          },
          {
            id: 'WIP',
            title: 'Work In Progress',
            label: '10/20',
            style: {width: 280},
            cards: [
              {
                id: 'Wip1',
                title: 'Clean House',
                label: '30 mins',
                description: 'Soap wash and polish floor. Polish windows and doors. Scrap all broken glasses'
              }
            ]
          },
          {id: 'BLOCKED', title: 'Blocked', label: '0/0', style: {width: 280}, cards: []},
          {
            id: 'COMPLETED',
            title: 'Completed',
            style: {width: 280},
            label: '2/5',
            cards: [
              {id: 'Completed1', title: 'Practice Meditation', label: '15 mins', description: 'Use Headspace app'},
              {
                id: 'Completed2',
                title: 'Maintain Daily Journal',
                label: '15 mins',
                description: 'Use Spreadsheet for now'
              }
            ]
          },
          {
            id: 'REPEAT',
            title: 'Repeat',
            style: {width: 280},
            label: '1/1',
            cards: [{id: 'Repeat1', title: 'Morning Jog', label: '30 mins', description: 'Track using fitbit'}]
          },
          {
            id: 'ARCHIVED',
            title: 'Archived',
            style: {width: 280},
            label: '1/1',
            cards: [{id: 'Archived1', title: 'Go Trekking', label: '300 mins', description: 'Completed 10km on cycle'}]
          },
          {
            id: 'ARCHIVED2',
            title: 'Archived2',
            style: {width: 280},
            label: '1/1',
            cards: [{id: 'Archived2', title: 'Go Jogging', label: '300 mins', description: 'Completed 10km on cycle'}]
          },
          {
            id: 'ARCHIVED3',
            title: 'Archived3',
            style: {width: 280},
            label: '1/1',
            cards: [{id: 'Archived3', title: 'Go Cycling', label: '300 mins', description: 'Completed 10km on cycle'}]
          }
        ]
      }
    },
    714: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      __webpack_require__(715),
        __webpack_require__(868),
        __webpack_require__(869),
        __webpack_require__(870),
        __webpack_require__(871),
        __webpack_require__(872),
        __webpack_require__(873),
        __webpack_require__(874),
        __webpack_require__(875),
        __webpack_require__(876),
        __webpack_require__(881),
        __webpack_require__(883),
        __webpack_require__(884),
        __webpack_require__(885),
        __webpack_require__(886),
        __webpack_require__(887),
        __webpack_require__(888),
        __webpack_require__(889),
        __webpack_require__(890),
        __webpack_require__(891),
        __webpack_require__(893),
        __webpack_require__(894),
        __webpack_require__(896),
        __webpack_require__(932)
    },
    715: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      ;(function(module) {
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),
          _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6),
          _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5),
          data = __webpack_require__(65)
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('Basic Functions', module).add(
          'Full Board example',
          function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a, {
              data: data
            })
          },
          {info: 'A complete Trello board with multiple lanes fed as json data'}
        )
      }.call(this, __webpack_require__(22)(module)))
    },
    866: function(module) {
      module.exports = {
        'Add another lane': '+ Add another lane',
        'Click to add card': 'Click to add card',
        'Delete lane': 'Delete lane',
        'Lane actions': 'Lane actions',
        button: {'Add lane': 'Add lane', 'Add card': 'Add card', Cancel: 'Cancel'},
        placeholder: {title: 'title', description: 'description', label: 'label'}
      }
    },
    867: function(module) {
      module.exports = {
        'Add another lane': '＋Добавить колонку',
        'Click to add card': '＋Добавить карточку',
        'Delete lane': 'Удалить колонку',
        'Lane actions': 'Действия над колонкой',
        button: {'Add card': 'Добавить карту', 'Add lane': 'Добавить колонку', Cancel: 'Отменить'},
        placeholder: {title: 'Название', description: 'Описание', label: 'Метка'}
      }
    },
    868: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      ;(function(module) {
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),
          _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6),
          _helpers_debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15),
          _src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5),
          data = __webpack_require__(65)
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('Drag-n-Drop', module)
          .add(
            'Basic',
            function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__.a, {
                data: data,
                draggable: !0,
                onCardMoveAcrossLanes: function(fromLaneId, toLaneId, cardId, addedIndex) {
                  Object(_helpers_debug__WEBPACK_IMPORTED_MODULE_2__.a)(
                    'onCardMoveAcrossLanes: '
                      .concat(fromLaneId, ', ')
                      .concat(toLaneId, ', ')
                      .concat(cardId, ', ')
                      .concat(addedIndex)
                  )
                },
                onDataChange: function(nextData) {
                  Object(_helpers_debug__WEBPACK_IMPORTED_MODULE_2__.a)('data has changed'),
                    Object(_helpers_debug__WEBPACK_IMPORTED_MODULE_2__.a)(nextData)
                },
                handleDragStart: function(cardId, laneId) {
                  Object(_helpers_debug__WEBPACK_IMPORTED_MODULE_2__.a)('drag started'),
                    Object(_helpers_debug__WEBPACK_IMPORTED_MODULE_2__.a)('cardId: '.concat(cardId)),
                    Object(_helpers_debug__WEBPACK_IMPORTED_MODULE_2__.a)('laneId: '.concat(laneId))
                },
                handleDragEnd: function(cardId, sourceLaneId, targetLaneId, position, card) {
                  Object(_helpers_debug__WEBPACK_IMPORTED_MODULE_2__.a)('drag ended'),
                    Object(_helpers_debug__WEBPACK_IMPORTED_MODULE_2__.a)('cardId: '.concat(cardId)),
                    Object(_helpers_debug__WEBPACK_IMPORTED_MODULE_2__.a)('sourceLaneId: '.concat(sourceLaneId)),
                    Object(_helpers_debug__WEBPACK_IMPORTED_MODULE_2__.a)('targetLaneId: '.concat(targetLaneId)),
                    Object(_helpers_debug__WEBPACK_IMPORTED_MODULE_2__.a)('newPosition: '.concat(position)),
                    Object(_helpers_debug__WEBPACK_IMPORTED_MODULE_2__.a)('cardDetails:'),
                    Object(_helpers_debug__WEBPACK_IMPORTED_MODULE_2__.a)(card)
                },
                handleLaneDragStart: function(laneId) {
                  Object(_helpers_debug__WEBPACK_IMPORTED_MODULE_2__.a)('lane drag started for '.concat(laneId))
                },
                handleLaneDragEnd: function(removedIndex, addedIndex, _ref) {
                  var id = _ref.id
                  Object(_helpers_debug__WEBPACK_IMPORTED_MODULE_2__.a)(
                    'lane drag ended from position '.concat(removedIndex, ' for laneId=').concat(id)
                  ),
                    Object(_helpers_debug__WEBPACK_IMPORTED_MODULE_2__.a)('New lane position: '.concat(addedIndex))
                }
              })
            },
            {info: 'A demonstration of onDragStart and onDragEnd hooks for card and lanes'}
          )
          .add(
            'Drag Styling',
            function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__.a, {
                data: data,
                cardDragClass: 'draggingCard',
                laneDragClass: 'draggingLane',
                draggable: !0
              })
            },
            {info: 'Modifying appearance of dragged card'}
          )
      }.call(this, __webpack_require__(22)(module)))
    },
    869: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      ;(function(module) {
        __webpack_require__(197)
        var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),
          _storybook_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6),
          _src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5)
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)('Basic Functions', module).add(
          'Infinite Scrolling',
          function() {
            function delayedPromise(durationInMs, resolutionPayload) {
              return new Promise(function(resolve) {
                setTimeout(function() {
                  resolve(resolutionPayload)
                }, durationInMs)
              })
            }
            function generateCards() {
              for (
                var cards = [],
                  fetchedItems = 15 * ((0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1) - 1),
                  i = fetchedItems + 1;
                i <= fetchedItems + 15;
                i++
              )
                cards.push({id: ''.concat(i), title: 'Card'.concat(i), description: 'Description for #'.concat(i)})
              return cards
            }
            var data = {lanes: [{id: 'Lane1', title: 'Lane1', cards: generateCards()}]}
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__.a, {
              data: data,
              laneSortFunction: function(card1, card2) {
                return parseInt(card1.id) - parseInt(card2.id)
              },
              onLaneScroll: function(requestedPage) {
                return delayedPromise(2e3, 2 < requestedPage ? [] : generateCards(requestedPage))
              }
            })
          },
          {
            info:
              '\n      Infinite scroll with onLaneScroll function callback to fetch more items\n      \n      The callback function passed to onLaneScroll will be of the following form\n      ~~~js\n      function paginate(requestedPage, laneId) {\n        return fetchCardsFromBackend(laneId, requestedPage); \n      };\n      ~~~\n    '
          }
        )
      }.call(this, __webpack_require__(22)(module)))
    },
    870: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      ;(function(module) {
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),
          _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6),
          _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5),
          data = {
            lanes: [
              {
                id: 'lane1',
                title: 'Planned Tasks',
                cards: [
                  {id: 'Card1', title: 'Card1', description: 'foo card', metadata: {id: 'Card1'}},
                  {id: 'Card2', title: 'Card2', description: 'bar card', metadata: {id: 'Card2'}}
                ]
              },
              {
                id: 'lane2',
                title: 'Executing',
                cards: [{id: 'Card3', title: 'Card3', description: 'foobar card', metadata: {id: 'Card3'}}]
              }
            ]
          }
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('Advanced Features', module).add(
          'Event Handling',
          function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a, {
              draggable: !0,
              data: data,
              onCardClick: function(cardId, metadata, laneId) {
                return alert(
                  'Card with id:'
                    .concat(cardId, ' clicked. Has metadata.id: ')
                    .concat(metadata.id, '. Card in lane: ')
                    .concat(laneId)
                )
              },
              onLaneClick: function(laneId) {
                return alert('Lane with id:'.concat(laneId, ' clicked'))
              }
            })
          },
          {info: 'Adding event handlers to cards'}
        )
      }.call(this, __webpack_require__(22)(module)))
    },
    871: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      ;(function(module) {
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),
          _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6),
          _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5),
          data = __webpack_require__(131)
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('Basic Functions', module)
          .add(
            'Sorted Lane',
            function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a, {
                data: data,
                laneSortFunction: function(card1, card2) {
                  return new Date(card1.metadata.completedAt) - new Date(card2.metadata.completedAt)
                }
              })
            },
            {info: 'A lane sorted by completed at ascending'}
          )
          .add(
            'Reverse Sorted Lane',
            function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a, {
                data: data,
                laneSortFunction: function(card1, card2) {
                  return new Date(card2.metadata.completedAt) - new Date(card1.metadata.completedAt)
                }
              })
            },
            {info: 'A lane sorted by completed at descending'}
          )
      }.call(this, __webpack_require__(22)(module)))
    },
    872: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      ;(function(module) {
        var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10),
          _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__
          ),
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11),
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
            _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__
          ),
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12),
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
            _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__
          ),
          _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13),
          _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
            _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__
          ),
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14),
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
            _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__
          ),
          _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1),
          _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
            _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__
          ),
          _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3),
          _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
            _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__
          ),
          react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),
          _storybook_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6),
          immutability_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24),
          immutability_helper__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(
            immutability_helper__WEBPACK_IMPORTED_MODULE_9__
          ),
          _helpers_debug__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15),
          _src__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5),
          data = __webpack_require__(65),
          RealtimeBoard = (function(_Component) {
            function RealtimeBoard() {
              var _getPrototypeOf2, _this
              _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, RealtimeBoard)
              for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++)
                args[_key] = arguments[_key]
              return (
                (_this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(
                  this,
                  (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(
                    RealtimeBoard
                  )).call.apply(_getPrototypeOf2, [this].concat(args))
                )),
                _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(
                  _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(
                    _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)
                  ),
                  'state',
                  {boardData: data, eventBus: void 0}
                ),
                _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(
                  _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(
                    _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)
                  ),
                  'setEventBus',
                  function(handle) {
                    _this.state.eventBus = handle
                  }
                ),
                _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(
                  _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(
                    _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)
                  ),
                  'completeMilkEvent',
                  function() {
                    _this.state.eventBus.publish({type: 'REMOVE_CARD', laneId: 'PLANNED', cardId: 'Milk'}),
                      _this.state.eventBus.publish({
                        type: 'ADD_CARD',
                        laneId: 'COMPLETED',
                        card: {id: 'Milk', title: 'Buy Milk', label: '15 mins', description: 'Use Headspace app'}
                      })
                  }
                ),
                _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(
                  _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(
                    _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)
                  ),
                  'addBlockedEvent',
                  function() {
                    _this.state.eventBus.publish({
                      type: 'ADD_CARD',
                      laneId: 'BLOCKED',
                      card: {
                        id: 'Ec2Error',
                        title: 'EC2 Instance Down',
                        label: '30 mins',
                        description: 'Main EC2 instance down'
                      }
                    })
                  }
                ),
                _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(
                  _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(
                    _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)
                  ),
                  'modifyLaneTitle',
                  function() {
                    var data = _this.state.boardData,
                      newData = immutability_helper__WEBPACK_IMPORTED_MODULE_9___default()(data, {
                        lanes: {1: {title: {$set: 'New Lane Title'}}}
                      })
                    _this.setState({boardData: newData})
                  }
                ),
                _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(
                  _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(
                    _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)
                  ),
                  'modifyCardTitle',
                  function() {
                    var data = _this.state.boardData,
                      newData = immutability_helper__WEBPACK_IMPORTED_MODULE_9___default()(data, {
                        lanes: {1: {cards: {0: {title: {$set: 'New Card Title'}}}}}
                      })
                    _this.setState({boardData: newData})
                  }
                ),
                _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(
                  _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(
                    _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)
                  ),
                  'prioritizeWriteBlog',
                  function() {
                    _this.state.eventBus.publish({
                      type: 'MOVE_CARD',
                      fromLaneId: 'PLANNED',
                      toLaneId: 'WIP',
                      cardId: 'Plan3',
                      index: 0
                    })
                  }
                ),
                _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(
                  _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(
                    _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)
                  ),
                  'shouldReceiveNewData',
                  function(nextData) {
                    Object(_helpers_debug__WEBPACK_IMPORTED_MODULE_10__.a)('data has changed'),
                      Object(_helpers_debug__WEBPACK_IMPORTED_MODULE_10__.a)(nextData)
                  }
                ),
                _this
              )
            }
            return (
              _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(RealtimeBoard, _Component),
              _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(RealtimeBoard, [
                {
                  key: 'render',
                  value: function() {
                    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                      'div',
                      null,
                      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                        'button',
                        {onClick: this.completeMilkEvent, style: {margin: 5}},
                        'Complete Buy Milk'
                      ),
                      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                        'button',
                        {onClick: this.addBlockedEvent, style: {margin: 5}},
                        'Add Blocked'
                      ),
                      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                        'button',
                        {onClick: this.modifyLaneTitle, style: {margin: 5}},
                        'Modify Lane Title'
                      ),
                      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                        'button',
                        {onClick: this.modifyCardTitle, style: {margin: 5}},
                        'Modify Card Title'
                      ),
                      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                        'button',
                        {onClick: this.prioritizeWriteBlog, style: {margin: 5}},
                        'Prioritize Write Blog'
                      ),
                      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_11__.a, {
                        data: this.state.boardData,
                        onDataChange: this.shouldReceiveNewData,
                        eventBusHandle: this.setEventBus
                      })
                    )
                  }
                }
              ]),
              RealtimeBoard
            )
          })(react__WEBPACK_IMPORTED_MODULE_7__.Component)
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_8__.storiesOf)('Advanced Features', module).add(
          'Realtime Events',
          function() {
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(RealtimeBoard, null)
          },
          {info: 'This is an illustration of external events that modify the cards in the board'}
        )
      }.call(this, __webpack_require__(22)(module)))
    },
    873: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      ;(function(module) {
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),
          _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6),
          _helpers_debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15),
          _src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5),
          data = __webpack_require__(252)
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('Advanced Features', module).add(
          'Collapsible Lanes',
          function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__.a, {
              data: data,
              draggable: !0,
              collapsibleLanes: !0,
              onDataChange: function(nextData) {
                Object(_helpers_debug__WEBPACK_IMPORTED_MODULE_2__.a)('data has changed'),
                  Object(_helpers_debug__WEBPACK_IMPORTED_MODULE_2__.a)(nextData)
              }
            })
          },
          {info: 'Collapse lanes when double clicking on the lanes'}
        )
      }.call(this, __webpack_require__(22)(module)))
    },
    874: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      ;(function(module) {
        __webpack_require__(197)
        var eventBus,
          _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10),
          _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__
          ),
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11),
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
            _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__
          ),
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12),
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
            _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__
          ),
          _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13),
          _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
            _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__
          ),
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14),
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
            _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__
          ),
          _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1),
          _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
            _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__
          ),
          _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3),
          _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
            _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__
          ),
          react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__),
          _storybook_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6),
          _src__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5),
          PER_PAGE = 15,
          addCard = function() {
            eventBus.publish({
              type: 'ADD_CARD',
              laneId: 'Lane1',
              card: {
                id: '000',
                title: 'EC2 Instance Down',
                label: '30 mins',
                description: 'Main EC2 instance down',
                metadata: {cardId: '000'}
              }
            })
          }
        function generateCards() {
          for (
            var cards = [],
              fetchedItems = ((0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1) - 1) * PER_PAGE,
              i = fetchedItems + 1;
            i <= fetchedItems + PER_PAGE;
            i++
          )
            cards.push({
              id: ''.concat(i),
              title: 'Card'.concat(i),
              description: 'Description for #'.concat(i),
              metadata: {cardId: ''.concat(i)}
            })
          return cards
        }
        var BoardWrapper = (function(_Component) {
          function BoardWrapper() {
            var _getPrototypeOf2, _this
            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, BoardWrapper)
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++)
              args[_key] = arguments[_key]
            return (
              (_this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(
                this,
                (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(
                  BoardWrapper
                )).call.apply(_getPrototypeOf2, [this].concat(args))
              )),
              _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(
                _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(
                  _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)
                ),
                'state',
                {data: _this.props.data}
              ),
              _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(
                _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(
                  _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)
                ),
                'setEventBus',
                function(handle) {
                  eventBus = handle
                }
              ),
              _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(
                _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(
                  _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)
                ),
                'delayedPromise',
                function(durationInMs, resolutionPayload) {
                  return new Promise(function(resolve) {
                    setTimeout(function() {
                      resolve(resolutionPayload)
                    }, durationInMs)
                  })
                }
              ),
              _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(
                _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(
                  _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)
                ),
                'refreshCards',
                function() {
                  eventBus.publish({
                    type: 'REFRESH_BOARD',
                    data: {lanes: [{id: 'Lane1', title: 'Changed Lane', cards: []}]}
                  })
                }
              ),
              _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(
                _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(
                  _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)
                ),
                'paginate',
                function(requestedPage) {
                  var newCards = generateCards(requestedPage)
                  return _this.delayedPromise(2e3, newCards)
                }
              ),
              _this
            )
          }
          return (
            _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(BoardWrapper, _Component),
            _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(BoardWrapper, [
              {
                key: 'render',
                value: function() {
                  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
                    'div',
                    null,
                    react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
                      'button',
                      {onClick: addCard, style: {margin: 5}},
                      'Add Card'
                    ),
                    react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
                      'button',
                      {onClick: this.refreshCards, style: {margin: 5}},
                      'Refresh Board'
                    ),
                    react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_10__.a, {
                      data: this.state.data,
                      eventBusHandle: this.setEventBus,
                      laneSortFunction: function(card1, card2) {
                        return parseInt(card1.id) - parseInt(card2.id)
                      },
                      onLaneScroll: this.paginate
                    })
                  )
                }
              }
            ]),
            BoardWrapper
          )
        })(react__WEBPACK_IMPORTED_MODULE_8__.Component)
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_9__.storiesOf)('Advanced Features', module).add(
          'Scrolling and Events',
          function() {
            var data = {lanes: [{id: 'Lane1', title: 'Lane1', cards: generateCards()}]}
            return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(BoardWrapper, {data: data})
          },
          {
            info:
              '\n      Infinite scroll with onLaneScroll function callback to fetch more items\n      \n      The callback function passed to onLaneScroll will be of the following form\n      ~~~js\n      function paginate(requestedPage, laneId) {\n        return fetchCardsFromBackend(laneId, requestedPage); \n      };\n      ~~~\n    '
          }
        )
      }.call(this, __webpack_require__(22)(module)))
    },
    875: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      ;(function(module) {
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),
          _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6),
          _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5)
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('Basic Functions', module).add(
          'Tags',
          function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a, {
              data: {
                lanes: [
                  {
                    id: 'lane1',
                    title: 'Planned Tasks',
                    cards: [
                      {
                        id: 'Card1',
                        title: 'Card1',
                        description: 'foo card',
                        metadata: {cardId: 'Card1'},
                        tags: [
                          {title: 'High', color: 'white', bgcolor: '#EB5A46'},
                          {title: 'Tech Debt', color: 'white', bgcolor: '#0079BF'},
                          {title: 'Very long tag that is', color: 'white', bgcolor: '#61BD4F'},
                          {title: 'One more', color: 'white', bgcolor: '#61BD4F'}
                        ]
                      },
                      {
                        id: 'Card2',
                        title: 'Card2',
                        description: 'bar card',
                        metadata: {cardId: 'Card2'},
                        tags: [{title: 'Low'}]
                      }
                    ]
                  }
                ]
              },
              tagStyle: {fontSize: '80%'}
            })
          },
          {info: 'Customizable tags for each card'}
        )
      }.call(this, __webpack_require__(22)(module)))
    },
    876: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      ;(function(module) {
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),
          _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6),
          _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5),
          data = (__webpack_require__(372), __webpack_require__(65))
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('Styling', module).add(
          'Board Styling',
          function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a, {
              data: data,
              style: {padding: '30px 20px', fontFamily: 'Verdana'},
              className: 'boardContainer'
            })
          },
          {info: 'Change the background and other css styles for the board container'}
        )
        var dataWithLaneStyles = {
          lanes: [
            {
              id: 'PLANNED',
              title: 'Planned Tasks',
              label: '20/70',
              style: {
                width: 280,
                backgroundColor: '#3179ba',
                color: '#fff',
                boxShadow: '2px 2px 4px 0px rgba(0,0,0,0.75)'
              },
              cards: [
                {id: 'Milk', title: 'Buy milk', label: '15 mins', description: '2 Gallons of milk at the Deli store'},
                {
                  id: 'Plan2',
                  title: 'Dispose Garbage',
                  label: '10 mins',
                  description: 'Sort out recyclable and waste as needed'
                }
              ]
            },
            {
              id: 'DONE',
              title: 'Doned tasks',
              label: '10/70',
              style: {
                width: 280,
                backgroundColor: '#ba7931',
                color: '#fff',
                boxShadow: '2px 2px 4px 0px rgba(0,0,0,0.75)'
              },
              cards: [
                {
                  id: 'burn',
                  title: 'Burn Garbage',
                  label: '10 mins',
                  description: 'Sort out recyclable and waste as needed'
                }
              ]
            },
            {
              id: 'ARCHIVE',
              title: 'Archived tasks',
              label: '1/2',
              cards: [{id: 'archived', title: 'Archived', label: '10 mins'}]
            }
          ]
        }
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('Styling', module).add(
          'Lane Styling',
          function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a, {
              data: dataWithLaneStyles,
              laneStyle: {backgroundColor: '#666'},
              style: {backgroundColor: '#eee'}
            })
          },
          {info: 'Change the look and feel of the lane'}
        )
        var dataWithCardStyles = {
          lanes: [
            {
              id: 'PLANNED',
              title: 'Planned Tasks',
              label: '20/70',
              cards: [
                {
                  id: 'Milk',
                  title: 'Buy milk',
                  label: '15 mins',
                  description: '2 Gallons of milk at the Deli store',
                  style: {backgroundColor: '#eec'}
                },
                {
                  id: 'Plan2',
                  title: 'Dispose Garbage',
                  label: '10 mins',
                  description: 'Sort out recyclable and waste as needed'
                },
                {id: 'Plan3', title: 'Burn Garbage', label: '20 mins'}
              ]
            }
          ]
        }
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('Styling', module).add(
          'Card Styling',
          function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a, {
              data: dataWithCardStyles,
              cardStyle: {backgroundColor: '#ffe'}
            })
          },
          {info: 'Change the background of cards'}
        )
      }.call(this, __webpack_require__(22)(module)))
    },
    877: function(module, exports, __webpack_require__) {
      ;(module.exports = __webpack_require__(878)(!1)).push([
        module.i,
        '.boardContainer {\n    background-color: #4BBF6B;\n}',
        ''
      ])
    },
    881: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      ;(function(module) {
        __webpack_require__(882)
        var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10),
          _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__
          ),
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11),
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
            _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__
          ),
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12),
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
            _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__
          ),
          _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13),
          _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
            _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__
          ),
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14),
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
            _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__
          ),
          _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1),
          _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
            _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__
          ),
          _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3),
          _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
            _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__
          ),
          react__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_require__(32), __webpack_require__(0)),
          react__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__),
          _storybook_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6),
          immutability_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24),
          immutability_helper__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(
            immutability_helper__WEBPACK_IMPORTED_MODULE_11__
          ),
          _src_styles_Base__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9),
          _helpers_debug__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15),
          _src__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5),
          CustomCard = function(props) {
            return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
              _src_styles_Base__WEBPACK_IMPORTED_MODULE_12__.q,
              _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(
                {'data-id': props.id, onClick: props.onClick, style: props.style, className: props.className},
                'style',
                {backgroundColor: props.cardColor, padding: 6}
              ),
              react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                'header',
                {
                  style: {
                    borderBottom: '1px solid #eee',
                    paddingBottom: 6,
                    marginBottom: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                  'div',
                  {style: {fontSize: 14, fontWeight: 'bold'}},
                  props.name
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                'div',
                {style: {fontSize: 12, color: '#BD3B36'}},
                react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                  'div',
                  {style: {color: '#4C4C4C', fontWeight: 'bold'}},
                  props.subTitle
                ),
                react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                  'div',
                  {style: {padding: '5px 0px'}},
                  react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('i', null, props.body)
                )
              )
            )
          },
          customCardData = {
            lanes: [
              {
                id: 'lane1',
                title: 'Planned',
                cards: [
                  {
                    id: 'Card1',
                    name: 'John Smith',
                    subTitle: 'SMS received at 12:13pm today',
                    body: 'Thanks. Please schedule me for an estimate on Monday.',
                    metadata: {id: 'Card1'}
                  },
                  {
                    id: 'Card2',
                    name: 'Card Weathers',
                    subTitle: 'Email received at 1:14pm',
                    body: 'Is the estimate free, and can someone call me soon?',
                    metadata: {id: 'Card1'}
                  }
                ]
              },
              {
                id: 'lane2',
                title: 'Work In Progress',
                cards: [
                  {
                    id: 'Card3',
                    name: 'Michael Caine',
                    subTitle: 'Email received at 4:23pm today',
                    body: 'You are welcome. Interested in doing business with you again',
                    metadata: {id: 'Card1'}
                  }
                ]
              }
            ]
          },
          BoardWithCustomCard = (function(_Component) {
            function BoardWithCustomCard() {
              var _getPrototypeOf2, _this
              _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, BoardWithCustomCard)
              for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++)
                args[_key] = arguments[_key]
              return (
                (_this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(
                  this,
                  (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(
                    BoardWithCustomCard
                  )).call.apply(_getPrototypeOf2, [this].concat(args))
                )),
                _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(
                  _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(
                    _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)
                  ),
                  'state',
                  {boardData: customCardData, draggedData: void 0}
                ),
                _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(
                  _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(
                    _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)
                  ),
                  'updateBoard',
                  function(newData) {
                    Object(_helpers_debug__WEBPACK_IMPORTED_MODULE_13__.a)('calling updateBoard'),
                      _this.setState({draggedData: newData})
                  }
                ),
                _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(
                  _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(
                    _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)
                  ),
                  'onDragEnd',
                  function(cardId, sourceLandId) {
                    Object(_helpers_debug__WEBPACK_IMPORTED_MODULE_13__.a)('Calling onDragENd')
                    var draggedData = _this.state.draggedData,
                      laneIndex = draggedData.lanes.findIndex(function(lane) {
                        return lane.id === sourceLandId
                      }),
                      cardIndex = draggedData.lanes[laneIndex].cards.findIndex(function(card) {
                        return card.id === cardId
                      }),
                      updatedData = immutability_helper__WEBPACK_IMPORTED_MODULE_11___default()(draggedData, {
                        lanes: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(
                          {},
                          laneIndex,
                          {
                            cards: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(
                              {},
                              cardIndex,
                              {cardColor: {$set: '#d0fdd2'}}
                            )
                          }
                        )
                      })
                    _this.setState({boardData: updatedData})
                  }
                ),
                _this
              )
            }
            return (
              _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(BoardWithCustomCard, _Component),
              _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(BoardWithCustomCard, [
                {
                  key: 'render',
                  value: function() {
                    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                      _src__WEBPACK_IMPORTED_MODULE_14__.a,
                      {
                        tagStyle: {fontSize: '80%'},
                        data: this.state.boardData,
                        draggable: !0,
                        onDataChange: this.updateBoard,
                        handleDragEnd: this.onDragEnd,
                        onCardClick: function(cardId, metadata) {
                          return alert(
                            'Card with id:'.concat(cardId, ' clicked. Has metadata.id: ').concat(metadata.id)
                          )
                        },
                        components: {Card: CustomCard}
                      }
                    )
                  }
                }
              ]),
              BoardWithCustomCard
            )
          })(react__WEBPACK_IMPORTED_MODULE_9__.Component)
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_10__.storiesOf)('Custom Components', module).add(
          'Drag-n-Drop Styling',
          function() {
            return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(BoardWithCustomCard, null)
          },
          {info: 'Change card color on drag-n-drop'}
        )
      }.call(this, __webpack_require__(22)(module)))
    },
    883: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      ;(function(module) {
        var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21),
          _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__
          ),
          react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_require__(26),
          __webpack_require__(32),
          __webpack_require__(0)),
          react__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),
          _storybook_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6),
          _src_styles_Base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9),
          _src_widgets_DeleteButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(110),
          _src__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5),
          _src_components_Card_Tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(173),
          CustomCard = function(_ref) {
            var onClick = _ref.onClick,
              className = _ref.className,
              name = _ref.name,
              cardStyle = _ref.cardStyle,
              body = _ref.body,
              dueOn = _ref.dueOn,
              cardColor = _ref.cardColor,
              subTitle = _ref.subTitle,
              tagStyle = _ref.tagStyle,
              escalationText = _ref.escalationText,
              tags = _ref.tags,
              showDeleteButton = _ref.showDeleteButton,
              onDelete = _ref.onDelete
            return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              _src_styles_Base__WEBPACK_IMPORTED_MODULE_5__.q,
              {onClick: onClick, style: cardStyle, className: className},
              react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                'header',
                {
                  style: {
                    borderBottom: '1px solid #eee',
                    paddingBottom: 6,
                    marginBottom: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    color: cardColor
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  'div',
                  {style: {fontSize: 14, fontWeight: 'bold'}},
                  name
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('div', {style: {fontSize: 11}}, dueOn),
                showDeleteButton &&
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    _src_widgets_DeleteButton__WEBPACK_IMPORTED_MODULE_6__.a,
                    {
                      onClick: function(e) {
                        onDelete(), e.stopPropagation()
                      }
                    }
                  )
              ),
              react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                'div',
                {style: {fontSize: 12, color: '#BD3B36'}},
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  'div',
                  {style: {color: '#4C4C4C', fontWeight: 'bold'}},
                  subTitle
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  'div',
                  {style: {padding: '5px 0px'}},
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('i', null, body)
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  'div',
                  {style: {marginTop: 10, textAlign: 'center', color: cardColor, fontSize: 15, fontWeight: 'bold'}},
                  escalationText
                ),
                tags &&
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    'div',
                    {
                      style: {
                        borderTop: '1px solid #eee',
                        paddingTop: 6,
                        display: 'flex',
                        justifyContent: 'flex-end',
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                      }
                    },
                    tags.map(function(tag) {
                      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                        _src_components_Card_Tag__WEBPACK_IMPORTED_MODULE_8__.a,
                        _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({key: tag.title}, tag, {
                          tagStyle: tagStyle
                        })
                      )
                    })
                  )
              )
            )
          },
          data = {
            lanes: [
              {
                id: 'lane1',
                title: 'Planned Tasks',
                label: '12/12',
                style: {backgroundColor: 'cyan', padding: 20},
                titleStyle: {fontSize: 20, marginBottom: 15},
                labelStyle: {color: '#009688', fontWeight: 'bold'},
                cards: [
                  {
                    id: 'Card1',
                    name: 'John Smith',
                    dueOn: 'due in a day',
                    subTitle: 'SMS received at 12:13pm today',
                    body: 'Thanks. Please schedule me for an estimate on Monday.',
                    escalationText: 'Escalated to OPS-ESCALATIONS!',
                    cardColor: '#BD3B36',
                    cardStyle: {borderRadius: 6, boxShadow: '0 0 6px 1px #BD3B36', marginBottom: 15},
                    metadata: {id: 'Card1'}
                  },
                  {
                    id: 'Card2',
                    name: 'Card Weathers',
                    dueOn: 'due now',
                    subTitle: 'Email received at 1:14pm',
                    body: 'Is the estimate free, and can someone call me soon?',
                    escalationText: 'Escalated to Admin',
                    cardColor: '#E08521',
                    cardStyle: {borderRadius: 6, boxShadow: '0 0 6px 1px #E08521', marginBottom: 15},
                    metadata: {id: 'Card1'}
                  }
                ]
              },
              {
                id: 'lane2',
                title: 'Long Lane name this is i suppose ha!',
                cards: [
                  {
                    id: 'Card3',
                    name: 'Michael Caine',
                    dueOn: 'due in a day',
                    subTitle: 'Email received at 4:23pm today',
                    body: 'You are welcome. Interested in doing business with you again',
                    escalationText: 'Escalated to OPS-ESCALATIONS!',
                    cardColor: '#BD3B36',
                    cardStyle: {borderRadius: 6, boxShadow: '0 0 6px 1px #BD3B36', marginBottom: 15},
                    metadata: {id: 'Card1'},
                    tags: [
                      {title: 'Critical', color: 'white', bgcolor: 'red'},
                      {title: '2d ETA', color: 'white', bgcolor: '#0079BF'}
                    ]
                  }
                ]
              }
            ]
          }
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.storiesOf)('Custom Components', module).add(
          'Card',
          function() {
            return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_7__.a, {
              tagStyle: {fontSize: '80%'},
              data: data,
              draggable: !0,
              components: {Card: CustomCard},
              onCardClick: function(cardId, metadata) {
                return alert('Card with id:'.concat(cardId, ' clicked. Has metadata.id: ').concat(metadata.id))
              }
            })
          },
          {info: 'Style your own card appearance. Watch out for usage of tags in custom styling as well!'}
        )
      }.call(this, __webpack_require__(22)(module)))
    },
    884: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      ;(function(module) {
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),
          _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6),
          _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5),
          CustomLaneHeader = function(_ref) {
            var label = _ref.label,
              cards = _ref.cards,
              title = _ref.title,
              current = _ref.current,
              target = _ref.target
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'header',
                {
                  style: {
                    borderBottom: '2px solid #c5c5c5',
                    paddingBottom: 6,
                    marginBottom: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  {style: {fontSize: 14, fontWeight: 'bold'}},
                  title
                ),
                label &&
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    {style: {width: '30%', textAlign: 'right', fontSize: 13}},
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'button',
                      {
                        onClick: function() {
                          alert(
                            'The label passed to the lane was: '
                              .concat(label, '. The lane has ')
                              .concat(cards.length, ' cards!')
                          )
                        },
                        style: {cursor: 'pointer'}
                      },
                      '?'
                    )
                  )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                null,
                'Percentage: ',
                current || 0,
                '/',
                target
              )
            )
          }
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('Custom Components', module).add(
          'LaneHeader',
          function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a, {
              data: {
                lanes: [
                  {
                    id: 'lane1',
                    title: 'Planned Tasks',
                    current: '70',
                    target: '100',
                    label: 'First Lane here',
                    cards: [
                      {
                        id: 'Card1',
                        title: 'John Smith',
                        description: 'Thanks. Please schedule me for an estimate on Monday.'
                      },
                      {id: 'Card2', title: 'Card Weathers', description: 'Email received at 1:14pm'}
                    ]
                  },
                  {
                    id: 'lane2',
                    title: 'Completed Tasks',
                    label: 'Second Lane here',
                    current: '30',
                    target: '100',
                    cards: [
                      {
                        id: 'Card3',
                        title: 'Michael Caine',
                        description: 'You are welcome. Interested in doing business with you again',
                        tags: [
                          {title: 'Critical', color: 'white', bgcolor: 'red'},
                          {title: '2d ETA', color: 'white', bgcolor: '#0079BF'}
                        ]
                      }
                    ]
                  }
                ]
              },
              components: {LaneHeader: CustomLaneHeader}
            })
          },
          {info: 'Style your lane header appearance'}
        )
      }.call(this, __webpack_require__(22)(module)))
    },
    885: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      ;(function(module) {
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),
          _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6),
          _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5),
          data = __webpack_require__(252),
          LaneFooter = function(_ref) {
            var onClick = _ref.onClick,
              collapsed = _ref.collapsed
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              {onClick: onClick},
              collapsed ? 'click to expand' : 'click to collapse'
            )
          }
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('Custom Components', module).add(
          'LaneFooter',
          function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a, {
              collapsibleLanes: !0,
              components: {LaneFooter: LaneFooter},
              data: data
            })
          }
        )
      }.call(this, __webpack_require__(22)(module)))
    },
    886: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      ;(function(module) {
        var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10),
          _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__
          ),
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11),
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
            _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__
          ),
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12),
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
            _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__
          ),
          _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13),
          _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
            _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__
          ),
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14),
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
            _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__
          ),
          react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),
          _storybook_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6),
          _src__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5),
          data = __webpack_require__(65),
          NewCardForm = (function(_Component) {
            function NewCardForm() {
              return (
                _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, NewCardForm),
                _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(
                  this,
                  _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(NewCardForm).apply(
                    this,
                    arguments
                  )
                )
              )
            }
            return (
              _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(NewCardForm, _Component),
              _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(NewCardForm, [
                {
                  key: 'render',
                  value: function() {
                    var _this = this,
                      onCancel = this.props.onCancel
                    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                      'div',
                      {
                        style: {
                          background: 'white',
                          borderRadius: 3,
                          border: '1px solid #eee',
                          borderBottom: '1px solid #ccc'
                        }
                      },
                      react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                        'div',
                        {style: {padding: 5, margin: 5}},
                        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                          'div',
                          null,
                          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                            'div',
                            {style: {marginBottom: 5}},
                            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('input', {
                              type: 'text',
                              ref: function(ref) {
                                return (_this.titleRef = ref)
                              },
                              placeholder: 'Title'
                            })
                          ),
                          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                            'div',
                            {style: {marginBottom: 5}},
                            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('input', {
                              type: 'text',
                              ref: function(ref) {
                                return (_this.descRef = ref)
                              },
                              placeholder: 'Description'
                            })
                          )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                          'button',
                          {onClick: this.handleAdd},
                          'Add'
                        ),
                        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                          'button',
                          {onClick: onCancel},
                          'Cancel'
                        )
                      )
                    )
                  }
                }
              ]),
              NewCardForm
            )
          })(react__WEBPACK_IMPORTED_MODULE_5__.Component)
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.storiesOf)('Custom Components', module).add(
          'NewCardForm',
          function() {
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_7__.a, {
              data: data,
              editable: !0,
              components: {NewCardForm: NewCardForm}
            })
          },
          {info: 'Pass a custom new card form compoment to add card'}
        )
      }.call(this, __webpack_require__(22)(module)))
    },
    887: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      ;(function(module) {
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),
          _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6),
          _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5),
          data = __webpack_require__(131),
          NewLaneSection = function(_ref) {
            var t = _ref.t,
              onClick = _ref.onClick
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'button',
              {onClick: onClick},
              t('Add another lane')
            )
          }
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('Custom Components', module).add(
          'NewLaneSection',
          function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a, {
              editable: !0,
              canAddLanes: !0,
              components: {NewLaneSection: NewLaneSection},
              data: data
            })
          },
          {}
        )
      }.call(this, __webpack_require__(22)(module)))
    },
    888: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      ;(function(module) {
        var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10),
          _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__
          ),
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11),
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
            _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__
          ),
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12),
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
            _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__
          ),
          _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13),
          _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
            _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__
          ),
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14),
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
            _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__
          ),
          react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),
          _storybook_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6),
          _src__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5),
          data = __webpack_require__(131),
          NewLaneForm = (function(_Component) {
            function NewLaneForm() {
              return (
                _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, NewLaneForm),
                _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(
                  this,
                  _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(NewLaneForm).apply(
                    this,
                    arguments
                  )
                )
              )
            }
            return (
              _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(NewLaneForm, _Component),
              _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(NewLaneForm, [
                {
                  key: 'render',
                  value: function() {
                    var _this = this,
                      _this$props = this.props,
                      onCancel = _this$props.onCancel,
                      t = _this$props.t
                    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                      'div',
                      null,
                      react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('input', {
                        ref: function(ref) {
                          return (_this.inputRef = ref)
                        },
                        placeholder: t('placeholder.title'),
                        autoFocus: !0
                      }),
                      react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                        'button',
                        {
                          onClick: function() {
                            return _this.props.onAdd({title: _this.inputRef.value})
                          }
                        },
                        t('button.Add lane')
                      ),
                      react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                        'button',
                        {onClick: onCancel},
                        t('button.Cancel')
                      )
                    )
                  }
                }
              ]),
              NewLaneForm
            )
          })(react__WEBPACK_IMPORTED_MODULE_5__.Component)
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.storiesOf)('Custom Components', module).add(
          'NewLaneForm',
          function() {
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_7__.a, {
              editable: !0,
              canAddLanes: !0,
              components: {NewLaneForm: NewLaneForm},
              data: data
            })
          }
        )
      }.call(this, __webpack_require__(22)(module)))
    },
    889: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      ;(function(module) {
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),
          _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6),
          _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5),
          data = __webpack_require__(252),
          CustomAddCardLink = function(_ref) {
            var onClick = _ref.onClick,
              t = _ref.t
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'button',
              {onClick: onClick},
              t('Click to add card')
            )
          }
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('Custom Components', module).add(
          'AddCardLink',
          function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a, {
              data: data,
              editable: !0,
              components: {AddCardLink: CustomAddCardLink}
            })
          }
        )
      }.call(this, __webpack_require__(22)(module)))
    },
    890: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      ;(function(module) {
        __webpack_require__(150)
        var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10),
          _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__
          ),
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11),
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
            _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__
          ),
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12),
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
            _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__
          ),
          _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13),
          _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
            _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__
          ),
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14),
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
            _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__
          ),
          _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1),
          _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
            _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__
          ),
          _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3),
          _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
            _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__
          ),
          react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__),
          _storybook_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6),
          _src__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5),
          data = __webpack_require__(65),
          AsyncBoard = (function(_Component) {
            function AsyncBoard() {
              var _getPrototypeOf2, _this
              _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, AsyncBoard)
              for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++)
                args[_key] = arguments[_key]
              return (
                (_this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(
                  this,
                  (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(
                    AsyncBoard
                  )).call.apply(_getPrototypeOf2, [this].concat(args))
                )),
                _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(
                  _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(
                    _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)
                  ),
                  'state',
                  {boardData: {lanes: [{id: 'loading', title: 'loading..', cards: []}]}}
                ),
                _this
              )
            }
            return (
              _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(AsyncBoard, _Component),
              _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(AsyncBoard, [
                {
                  key: 'componentDidMount',
                  value: function() {
                    setTimeout(this.getBoard.bind(this), 1e3)
                  }
                },
                {
                  key: 'getBoard',
                  value: function() {
                    this.setState({boardData: data})
                  }
                },
                {
                  key: 'render',
                  value: function() {
                    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
                      _src__WEBPACK_IMPORTED_MODULE_10__.a,
                      {data: this.state.boardData}
                    )
                  }
                }
              ]),
              AsyncBoard
            )
          })(react__WEBPACK_IMPORTED_MODULE_8__.Component)
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_9__.storiesOf)('Advanced Features', module).add(
          'Async Load data',
          function() {
            return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(AsyncBoard, null)
          },
          {info: 'Load board data asynchronously after the component has mounted'}
        )
      }.call(this, __webpack_require__(22)(module)))
    },
    891: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      ;(function(module) {
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),
          _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6),
          _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5),
          data = __webpack_require__(892)
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('Drag-n-Drop', module).add(
          'Restrict lanes',
          function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a, {
              data: data,
              draggable: !0
            })
          },
          {info: 'Use droppable property to prevent some lanes from being droppable'}
        ),
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('Drag-n-Drop', module).add(
            'Drag Cards not Lanes',
            function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a, {
                data: data,
                draggable: !0,
                laneDraggable: !1
              })
            },
            {info: 'Use props to disable dragging lanes but enable card dragging'}
          )
      }.call(this, __webpack_require__(22)(module)))
    },
    892: function(module) {
      module.exports = {
        lanes: [
          {
            id: 'PLANNED',
            title: 'Planned Tasks',
            label: '20/70',
            cards: [
              {id: 'Milk', title: 'Buy milk', label: '15 mins', description: '2 Gallons of milk at the Deli store'},
              {
                id: 'Plan2',
                title: 'Dispose Garbage',
                label: '10 mins',
                description: 'Sort out recyclable and waste as needed'
              },
              {id: 'Plan3', title: 'Write Blog', label: '30 mins', description: 'Can AI make memes?'},
              {id: 'Plan4', title: 'Pay Rent', label: '5 mins', description: 'Transfer to bank account'}
            ]
          },
          {
            id: 'WIP',
            title: 'Work In Progress (Not Droppable)',
            label: '10/20',
            droppable: !1,
            cards: [
              {
                id: 'Wip1',
                title: 'Clean House',
                label: '30 mins',
                description: 'Soap wash and polish floor. Polish windows and doors. Scrap all broken glasses'
              }
            ]
          },
          {id: 'COMPLETED', title: 'Completed (Droppable)', label: '0/0', style: {width: 280}, cards: []}
        ]
      }
    },
    893: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      ;(function(module) {
        var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34),
          _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__
          ),
          react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),
          _storybook_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6),
          _helpers_debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15),
          _src__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5),
          data = __webpack_require__(65),
          smallData = __webpack_require__(131),
          disallowAddingCardData = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, data)
        ;(disallowAddingCardData.lanes[0].title = 'Disallowed adding card'),
          (disallowAddingCardData.lanes[0].disallowAddingCard = !0),
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)('Editable Board', module)
            .add(
              'Add/Delete Cards',
              function() {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_4__.a, {
                  data: data,
                  draggable: !0,
                  id: 'EditableBoard1',
                  onDataChange: function(nextData) {
                    Object(_helpers_debug__WEBPACK_IMPORTED_MODULE_3__.a)('Board has changed'),
                      Object(_helpers_debug__WEBPACK_IMPORTED_MODULE_3__.a)(nextData)
                  },
                  onCardDelete: function(cardId, laneId) {
                    Object(_helpers_debug__WEBPACK_IMPORTED_MODULE_3__.a)(
                      'Card: '.concat(cardId, ' deleted from lane: ').concat(laneId)
                    )
                  },
                  onCardAdd: function(card, laneId) {
                    Object(_helpers_debug__WEBPACK_IMPORTED_MODULE_3__.a)('New card added to lane '.concat(laneId)),
                      Object(_helpers_debug__WEBPACK_IMPORTED_MODULE_3__.a)(card)
                  },
                  onCardClick: function(cardId, metadata, laneId) {
                    return alert('Card with id:'.concat(cardId, ' clicked. Card in lane: ').concat(laneId))
                  },
                  editable: !0
                })
              },
              {info: 'Add/delete cards or delete lanes'}
            )
            .add(
              'Add New Lane',
              function() {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_4__.a, {
                  data: smallData,
                  editable: !0,
                  canAddLanes: !0,
                  onLaneAdd: function(t) {
                    return Object(_helpers_debug__WEBPACK_IMPORTED_MODULE_3__.a)(
                      'You added a line with title ' + t.title
                    )
                  }
                })
              },
              {info: 'Allow adding new lane'}
            )
            .add(
              'Disallow Adding Card for specific Lane',
              function() {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_4__.a, {
                  data: disallowAddingCardData,
                  editable: !0
                })
              },
              {info: 'Can hide the add card button on specific lanes'}
            )
            .add(
              'Inline Edit Lane Title',
              function() {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_4__.a, {
                  data: smallData,
                  editable: !0,
                  canAddLanes: !0,
                  editLaneTitle: !0,
                  onLaneUpdate: function(laneId, data) {
                    return Object(_helpers_debug__WEBPACK_IMPORTED_MODULE_3__.a)(
                      'onLaneUpdate: '.concat(laneId, ' -> ').concat(data.title)
                    )
                  },
                  onLaneAdd: function(t) {
                    return Object(_helpers_debug__WEBPACK_IMPORTED_MODULE_3__.a)(
                      'You added a line with title ' + t.title
                    )
                  }
                })
              },
              {info: 'Allow edit lane title'}
            )
      }.call(this, __webpack_require__(22)(module)))
    },
    894: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      ;(function(module) {
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),
          _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6),
          _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5),
          data1 = __webpack_require__(65),
          data2 = __webpack_require__(895),
          containerStyles = {height: 500, padding: 20}
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('Multiple Boards', module).add(
          'Two Boards',
          function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              {style: {display: 'flex', flexDirection: 'column'}},
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {style: containerStyles},
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a, {
                  id: 'board1',
                  data: data1,
                  draggable: !0
                })
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {style: containerStyles},
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__.a, {
                  id: 'board2',
                  data: data2,
                  draggable: !0
                })
              )
            )
          },
          {info: 'Have two boards rendering their own data'}
        )
      }.call(this, __webpack_require__(22)(module)))
    },
    895: function(module) {
      module.exports = {
        lanes: [
          {
            id: 'yesterday',
            title: 'Yesterday',
            label: '20/70',
            cards: [
              {
                id: 'Wip1',
                title: 'Clean House',
                label: '30 mins',
                description: 'Soap wash and polish floor. Polish windows and doors. Scrap all broken glasses'
              }
            ]
          },
          {
            id: 'today',
            title: 'Today',
            label: '10/20',
            droppable: !1,
            cards: [
              {id: 'Milk', title: 'Buy milk', label: '15 mins', description: '2 Gallons of milk at the Deli store'},
              {
                id: 'Plan2',
                title: 'Dispose Garbage',
                label: '10 mins',
                description: 'Sort out recyclable and waste as needed'
              },
              {id: 'Plan3', title: 'Write Blog', label: '30 mins', description: 'Can AI make memes?'},
              {id: 'Plan4', title: 'Pay Rent', label: '5 mins', description: 'Transfer to bank account'}
            ]
          },
          {id: 'tomorrow', title: 'Tomorrow', label: '0/0', cards: []}
        ]
      }
    },
    896: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      ;(function(module) {
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),
          _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6),
          react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(137),
          _src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5),
          _helpers_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(175),
          _src_helpers_createTranslate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(107),
          smallData = __webpack_require__(131),
          I18nBoard = function() {
            var t = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)().t
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'div',
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'button',
                  {
                    onClick: function() {
                      return _helpers_i18n__WEBPACK_IMPORTED_MODULE_4__.a.changeLanguage('en')
                    }
                  },
                  'English'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'button',
                  {
                    onClick: function() {
                      return _helpers_i18n__WEBPACK_IMPORTED_MODULE_4__.a.changeLanguage('ru')
                    }
                  },
                  'Русский'
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__.a, {
                data: smallData,
                t: t,
                editable: !0,
                canAddLanes: !0,
                draggable: !0
              })
            )
          }
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('I18n', module)
          .add(
            'Custom texts',
            function() {
              var customTranslation = Object(_src_helpers_createTranslate__WEBPACK_IMPORTED_MODULE_5__.a)({
                'Add another lane': 'NEW LANE',
                'Click to add card': 'Click to add card',
                'Delete lane': 'Delete lane',
                'Lane actions': 'Lane actions',
                button: {'Add lane': 'Add lane', 'Add card': 'Add card', Cancel: 'Cancel'},
                placeholder: {title: 'title', description: 'description', label: 'label'}
              })
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__.a, {
                data: smallData,
                t: customTranslation,
                editable: !0,
                canAddLanes: !0,
                draggable: !0
              })
            },
            {info: 'Have custom text titles'}
          )
          .add(
            'Flat translation table',
            function() {
              var FLAT_TRANSLATION_TABLE = {
                'Add another lane': '+ Weitere Liste erstellen',
                'Click to add card': 'Klicken zum Erstellen einer Karte',
                'Delete lane': 'Liste löschen',
                'Lane actions': 'Listenaktionen',
                'button.Add lane': 'Liste hinzufügen',
                'button.Add card': 'Karte hinzufügen',
                'button.Cancel': 'Abbrechen',
                'placeholder.title': 'Titel',
                'placeholder.description': 'Beschreibung',
                'placeholder.label': 'Label'
              }
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__.a, {
                data: smallData,
                t: function(key) {
                  return FLAT_TRANSLATION_TABLE[key]
                },
                editable: !0,
                canAddLanes: !0,
                draggable: !0
              })
            },
            {info: 'Flat translation table'}
          ),
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('I18n', module)
            .addDecorator(function(story) {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_i18next__WEBPACK_IMPORTED_MODULE_2__.I18nextProvider,
                {i18n: _helpers_i18n__WEBPACK_IMPORTED_MODULE_4__.a},
                story()
              )
            })
            .add(
              'Using i18next',
              function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I18nBoard, null)
              },
              {info: 'Availability to switching between languages'}
            )
      }.call(this, __webpack_require__(22)(module)))
    },
    9: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'l', function() {
        return GlobalStyle
      }),
        __webpack_require__.d(__webpack_exports__, 'h', function() {
          return CustomPopoverContainer
        }),
        __webpack_require__.d(__webpack_exports__, 'i', function() {
          return CustomPopoverContent
        }),
        __webpack_require__.d(__webpack_exports__, 'b', function() {
          return BoardWrapper
        }),
        __webpack_require__.d(__webpack_exports__, 'v', function() {
          return Section
        }),
        __webpack_require__.d(__webpack_exports__, 'o', function() {
          return LaneHeader
        }),
        __webpack_require__.d(__webpack_exports__, 'n', function() {
          return LaneFooter
        }),
        __webpack_require__.d(__webpack_exports__, 'u', function() {
          return ScrollableLane
        }),
        __webpack_require__.d(__webpack_exports__, 'x', function() {
          return Title
        }),
        __webpack_require__.d(__webpack_exports__, 't', function() {
          return RightContent
        }),
        __webpack_require__.d(__webpack_exports__, 'g', function() {
          return CardWrapper
        }),
        __webpack_require__.d(__webpack_exports__, 'q', function() {
          return MovableCardWrapper
        }),
        __webpack_require__.d(__webpack_exports__, 'd', function() {
          return CardHeader
        }),
        __webpack_require__.d(__webpack_exports__, 'f', function() {
          return CardTitle
        }),
        __webpack_require__.d(__webpack_exports__, 'e', function() {
          return CardRightContent
        }),
        __webpack_require__.d(__webpack_exports__, 'j', function() {
          return Detail
        }),
        __webpack_require__.d(__webpack_exports__, 'k', function() {
          return Footer
        }),
        __webpack_require__.d(__webpack_exports__, 'w', function() {
          return TagSpan
        }),
        __webpack_require__.d(__webpack_exports__, 'a', function() {
          return AddCardLink
        }),
        __webpack_require__.d(__webpack_exports__, 'p', function() {
          return LaneTitle
        }),
        __webpack_require__.d(__webpack_exports__, 's', function() {
          return NewLaneSection
        }),
        __webpack_require__.d(__webpack_exports__, 'r', function() {
          return NewLaneButtons
        }),
        __webpack_require__.d(__webpack_exports__, 'c', function() {
          return CardForm
        }),
        __webpack_require__.d(__webpack_exports__, 'm', function() {
          return InlineInput
        })
      var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7),
        _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8),
        styled_components__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_1__
        ),
        react_popopo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96)
      function _templateObject29() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n    &:focus {\n      box-shadow: inset 0 0 0 2px #0079bf;\n    }\n    '
        ])
        return (
          (_templateObject29 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject28() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  overflow-x: hidden; /* for Firefox (issue #5) */\n  word-wrap: break-word;\n  min-height: 28px;\n  max-height: 112px; /* optional, but recommended */\n  resize: none;\n  width: 100%;\n  height: 28px;\n  font-size: 15px;\n  line-height: 20px;\n  background-color: transparent;\n  box-shadow: none;\n  box-sizing: border-box;\n  border-radius: 3px;\n  border: 0;\n  padding: 4px 8px;\n  outline: 0;\n  ',
          '\n  &:focus {\n    background-color: white;\n  }\n'
        ])
        return (
          (_templateObject28 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject27() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  background-color: #e3e3e3;\n'
        ])
        return (
          (_templateObject27 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject26() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  margin-top: 10px;\n'
        ])
        return (
          (_templateObject26 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject25() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  width: 200px;\n'
        ])
        return (
          (_templateObject25 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject24() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  background-color: #2b6aa3;\n  border-radius: 3px;\n  margin: 5px;\n  position: relative;\n  padding: 5px;\n  display: inline-flex;\n  height: auto;\n  flex-direction: column;\n'
        ])
        return (
          (_templateObject24 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject23() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  font-size: 15px;\n  width: 268px;\n  height: auto;\n'
        ])
        return (
          (_templateObject23 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject22() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  border-radius: 0 0 3px 3px;\n  color: #838c91;\n  display: block;\n  padding: 5px 2px;\n  margin-top: 10px;\n  position: relative;\n  text-decoration: none;\n  cursor: pointer;\n\n  &:hover {\n    //background-color: #cdd2d4;\n    color: #4d4d4d;\n    text-decoration: underline;\n  }\n'
        ])
        return (
          (_templateObject22 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject21() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  padding: 2px 3px;\n  border-radius: 3px;\n  margin: 2px 5px;\n  font-size: 70%;\n'
        ])
        return (
          (_templateObject21 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject20() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  border-top: 1px solid #eee;\n  padding-top: 6px;\n  text-align: right;\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: row;\n  flex-wrap: wrap;\n'
        ])
        return (
          (_templateObject20 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject19() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  font-size: 12px;\n  color: #4d4d4d;\n  white-space: pre-wrap;\n'
        ])
        return (
          (_templateObject19 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject18() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  font-size: 10px;\n'
        ])
        return (
          (_templateObject18 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject17() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  font-size: 14px;\n'
        ])
        return (
          (_templateObject17 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject16() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  border-bottom: 1px solid #eee;\n  padding-bottom: 6px;\n  color: #000;\n'
        ])
        return (
          (_templateObject16 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject15() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  &:hover {\n    background-color: #f0f0f0;\n    color: #000;\n  }\n'
        ])
        return (
          (_templateObject15 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject14() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  border-radius: 3px;\n  border-bottom: 1px solid #ccc;\n  background-color: #fff;\n  position: relative;\n  padding: 10px;\n  cursor: pointer;\n  max-width: 250px;\n  margin-bottom: 7px;\n  min-width: 230px;\n'
        ])
        return (
          (_templateObject14 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject13() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  width: 30%;\n  text-align: right;\n  padding-right: 10px;\n  font-size: 13px;\n'
        ])
        return (
          (_templateObject13 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject12() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 18px;\n  cursor: ',
          ';\n  width: 70%;\n'
        ])
        return (
          (_templateObject12 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject11() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  flex: 1;\n  overflow-y: auto;\n  min-width: 250px;\n  overflow-x: hidden;\n  align-self: center;\n  max-height: 90vh;\n  margin-top: 10px;\n  flex-direction: column;\n  justify-content: space-between;\n'
        ])
        return (
          (_templateObject11 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject10() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  position: relative;\n  height: 10px;\n'
        ])
        return (
          (_templateObject10 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject9() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n    padding: 0px 5px;\n    '
        ])
        return (
          (_templateObject9 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject8() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n    padding: 0px;\n    line-height: 30px;\n    '
        ])
        return (
          (_templateObject8 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject7() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  margin-bottom: 0px;\n  ',
          '\n  ',
          '\n'
        ])
        return (
          (_templateObject7 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject6() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  background-color: #e3e3e3;\n  border-radius: 3px;\n  margin: 5px 5px;\n  position: relative;\n  padding: 10px;\n  display: inline-flex;\n  height: auto;\n  max-height: 90%;\n  flex-direction: column;\n'
        ])
        return (
          (_templateObject6 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject5() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n'
        ])
        return (
          (_templateObject5 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject4() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  background-color: #3179ba;\n  overflow-y: hidden;\n  padding: 5px;\n  color: #393939;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  height: 100vh;\n'
        ])
        return (
          (_templateObject4 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject3() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  visibility: hidden;\n  margin-top: -5px;\n  opacity: 0;\n  position: absolute;\n  z-index: 10;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);\n  transition: all 0.3s ease 0ms;\n  border-radius: 3px;\n  min-width: 7em;\n  flex-flow: column nowrap;\n  background-color: #fff;\n  color: #000;\n  padding: 5px;\n  left: 50%;\n  transform: translateX(-50%);\n  ',
          '\n  &::before {\n    visibility: hidden;\n  }\n  a {\n    color: rgba(255, 255, 255, 0.56);\n    padding: .5em 1em;\n    margin: 0;\n    text-decoration: none;\n    &:hover {\n      background-color: #00bcd4 !important;\n      color: #37474F;\n    }\n  }\n'
        ])
        return (
          (_templateObject3 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject2() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([
          '\n  position: absolute;\n  right: 10px;\n  flex-flow: column nowrap;\n'
        ])
        return (
          (_templateObject2 = function() {
            return data
          }),
          data
        )
      }
      function _templateObject() {
        var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(
          [
            '\n  .comPlainTextContentEditable {\n    -webkit-user-modify: read-write-plaintext-only;\n    cursor: text;\n  }\n\n  .comPlainTextContentEditable--has-placeholder::before {\n    content: attr(placeholder);\n    opacity: 0.5;\n    color: inherit;\n    cursor: text;\n  }\n\n  .react_trello_dragClass {\n    transform: rotate(3deg);\n  }\n\n  .react_trello_dragLaneClass {\n    transform: rotate(3deg);\n  }\n\n  .icon-overflow-menu-horizontal:before {\n    content: "\\E91F";\n  }\n  .icon-lg, .icon-sm {\n    color: #798d99;\n  }\n  .icon-lg {\n    height: 32px;\n    font-size: 16px;\n    line-height: 32px;\n    width: 32px;\n  }\n'
          ],
          [
            '\n  .comPlainTextContentEditable {\n    -webkit-user-modify: read-write-plaintext-only;\n    cursor: text;\n  }\n\n  .comPlainTextContentEditable--has-placeholder::before {\n    content: attr(placeholder);\n    opacity: 0.5;\n    color: inherit;\n    cursor: text;\n  }\n\n  .react_trello_dragClass {\n    transform: rotate(3deg);\n  }\n\n  .react_trello_dragLaneClass {\n    transform: rotate(3deg);\n  }\n\n  .icon-overflow-menu-horizontal:before {\n    content: "\\\\E91F";\n  }\n  .icon-lg, .icon-sm {\n    color: #798d99;\n  }\n  .icon-lg {\n    height: 32px;\n    font-size: 16px;\n    line-height: 32px;\n    width: 32px;\n  }\n'
          ]
        )
        return (
          (_templateObject = function() {
            return data
          }),
          data
        )
      }
      var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle)(_templateObject()),
        CustomPopoverContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(
          react_popopo__WEBPACK_IMPORTED_MODULE_2__.PopoverContainer
        )(_templateObject2()),
        CustomPopoverContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(
          react_popopo__WEBPACK_IMPORTED_MODULE_2__.PopoverContent
        )(_templateObject3(), function(props) {
          return props.active && '\n    visibility: visible;\n    opacity: 1;\n    transition-delay: 100ms;\n  '
        }),
        BoardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4()),
        Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.header(_templateObject5()),
        Section = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section(_templateObject6()),
        LaneHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Header)(
          _templateObject7(),
          function(props) {
            return props.editLaneTitle && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject8())
          },
          function(props) {
            return (
              !props.editLaneTitle && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject9())
            )
          }
        ),
        LaneFooter = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject10()),
        ScrollableLane = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject11()),
        Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span(_templateObject12(), function(props) {
          return props.draggable ? 'grab' : 'auto'
        }),
        RightContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span(_templateObject13()),
        CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.article(_templateObject14()),
        MovableCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(CardWrapper)(_templateObject15()),
        CardHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Header)(_templateObject16()),
        CardTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Title)(_templateObject17()),
        CardRightContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(RightContent)(_templateObject18()),
        Detail = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject19()),
        Footer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject20()),
        TagSpan = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span(_templateObject21()),
        AddCardLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a(_templateObject22()),
        LaneTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject23()),
        LaneSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section(_templateObject24()),
        NewLaneSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(LaneSection)(_templateObject25()),
        NewLaneButtons = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject26()),
        CardForm = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject27()),
        InlineInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.textarea(_templateObject28(), function(
          props
        ) {
          return props.border && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject29())
        })
    },
    932: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      ;(function(module) {
        var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21),
          _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__
          ),
          _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_require__(26),
          __webpack_require__(32),
          __webpack_require__(10)),
          _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__
          ),
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11),
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
            _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__
          ),
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12),
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
            _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__
          ),
          _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13),
          _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
            _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__
          ),
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14),
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
            _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__
          ),
          _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1),
          _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
            _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__
          ),
          _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3),
          _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(
            _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__
          ),
          react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__),
          _storybook_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6),
          _src__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5),
          data = (__webpack_require__(372), __webpack_require__(65)),
          CustomLaneHeader = function(props) {
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
              'div',
              null,
              react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                'header',
                {
                  style: {
                    borderBottom: '2px solid #c5c5c5',
                    paddingBottom: 6,
                    marginBottom: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                  'div',
                  {style: {fontSize: 14, fontWeight: 'bold'}},
                  props.title
                ),
                props.label &&
                  react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                    'div',
                    {style: {width: '30%', textAlign: 'right', fontSize: 13}},
                    react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                      'button',
                      {
                        onClick: function() {
                          alert(
                            'The label passed to the lane was: '
                              .concat(props.label, '. The lane has ')
                              .concat(props.cards.length, ' cards!')
                          )
                        },
                        style: {cursor: 'pointer'}
                      },
                      '?'
                    )
                  )
              )
            )
          },
          NewCard = (function(_Component) {
            function NewCard() {
              var _getPrototypeOf2, _this
              _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, NewCard)
              for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++)
                args[_key] = arguments[_key]
              return (
                (_this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(
                  this,
                  (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(
                    NewCard
                  )).call.apply(_getPrototypeOf2, [this].concat(args))
                )),
                _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(
                  _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(
                    _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this)
                  ),
                  'updateField',
                  function(field, evt) {
                    _this.setState(
                      _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(
                        {},
                        field,
                        evt.target.value
                      )
                    )
                  }
                ),
                _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(
                  _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(
                    _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this)
                  ),
                  'handleAdd',
                  function() {
                    _this.props.onAdd(_this.state)
                  }
                ),
                _this
              )
            }
            return (
              _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(NewCard, _Component),
              _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(NewCard, [
                {
                  key: 'render',
                  value: function() {
                    var _this2 = this,
                      onCancel = this.props.onCancel
                    return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                      'div',
                      {
                        style: {
                          background: 'white',
                          borderRadius: 3,
                          border: '1px solid #eee',
                          borderBottom: '1px solid #ccc'
                        }
                      },
                      react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                        'div',
                        {style: {padding: 5, margin: 5}},
                        react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                          'div',
                          null,
                          react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                            'div',
                            {style: {marginBottom: 5}},
                            react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement('input', {
                              type: 'text',
                              onChange: function(evt) {
                                return _this2.updateField('title', evt)
                              },
                              placeholder: 'Title'
                            })
                          ),
                          react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                            'div',
                            {style: {marginBottom: 5}},
                            react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement('input', {
                              type: 'text',
                              onChange: function(evt) {
                                return _this2.updateField('description', evt)
                              },
                              placeholder: 'Description'
                            })
                          )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                          'button',
                          {onClick: this.handleAdd},
                          'Add'
                        ),
                        react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                          'button',
                          {onClick: onCancel},
                          'Cancel'
                        )
                      )
                    )
                  }
                }
              ]),
              NewCard
            )
          })(react__WEBPACK_IMPORTED_MODULE_10__.Component),
          CustomCard = function(props) {
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
              'div',
              {style: {padding: 6}},
              react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                'header',
                {
                  style: {
                    borderBottom: '1px solid #eee',
                    paddingBottom: 6,
                    marginBottom: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    color: props.cardColor
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                  'div',
                  {style: {fontSize: 14, fontWeight: 'bold'}},
                  props.name
                ),
                react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement('div', {style: {fontSize: 11}}, props.dueOn)
              ),
              react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                'div',
                {style: {fontSize: 12, color: '#BD3B36'}},
                react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                  'div',
                  {style: {color: '#4C4C4C', fontWeight: 'bold'}},
                  props.subTitle
                ),
                react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                  'div',
                  {style: {padding: '5px 0px'}},
                  react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement('i', null, props.body)
                ),
                react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                  'div',
                  {
                    style: {
                      marginTop: 10,
                      textAlign: 'center',
                      color: props.cardColor,
                      fontSize: 15,
                      fontWeight: 'bold'
                    }
                  },
                  props.escalationText
                ),
                props.tags &&
                  react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                    'div',
                    {
                      style: {
                        borderTop: '1px solid #eee',
                        paddingTop: 6,
                        display: 'flex',
                        justifyContent: 'flex-end',
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                      }
                    },
                    props.tags.map(function(tag) {
                      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                        Tag,
                        _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({key: tag.title}, tag, {
                          tagStyle: props.tagStyle
                        })
                      )
                    })
                  )
              )
            )
          }
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_11__.storiesOf)('Deprecation warnings', module).add(
          'v2.2 warnings',
          function() {
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
              _src__WEBPACK_IMPORTED_MODULE_12__.a,
              {
                data: data,
                editable: !0,
                addCardLink: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement('button', null, 'New Card'),
                customLaneHeader: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(CustomLaneHeader, null),
                newLaneTemplate: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement('div', null, 'new lane'),
                newCardTemplate: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(NewCard, null),
                customCardLayout: !0
              },
              react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(CustomCard, null)
            )
          },
          {
            info:
              'Example of usage legacy props: addCardLink, customCardLayout, customLaneHeader, newLaneTemplate, newCardTemplate'
          }
        )
      }.call(this, __webpack_require__(22)(module)))
    }
  },
  [[382, 1, 2]]
])
//# sourceMappingURL=main.e11679f84eaccf28d156.bundle.js.map
