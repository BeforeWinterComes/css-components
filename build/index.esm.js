import React from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var Mp4Player = function Mp4Player(_a) {
  var url = _a.url,
      props = __rest(_a, ["url"]);

  return /*#__PURE__*/React.createElement("video", __assign({
    src: url,
    autoPlay: true,
    controls: true
  }, props), /*#__PURE__*/React.createElement("source", {
    src: url,
    type: "video/mp4"
  }), /*#__PURE__*/React.createElement("track", {
    src: url,
    kind: "captions",
    label: "english_captions"
  }));
};

var TitleUnfold = function TitleUnfold(_a) {
  var _b = _a.content,
      content = _b === void 0 ? "Before winter comes" : _b,
      _c = _a.delay,
      delay = _c === void 0 ? 0.3 : _c,
      _d = _a.backgroundColor,
      backgroundColor = _d === void 0 ? "#222" : _d,
      _e = _a.height,
      height = _e === void 0 ? "100vh" : _e;
  return /*#__PURE__*/React.createElement("div", {
    className: "reveal_wrap",
    style: {
      backgroundColor: backgroundColor,
      height: height
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, content === null || content === void 0 ? void 0 : content.split("").map(function (letter, i) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        animationDelay: delay + Math.abs(i - content.split("").filter(function (e) {
          return e !== " ";
        }).length / 2) * 0.1 + "s"
      }
    }, letter);
  })));
};

export { Mp4Player, TitleUnfold as TitleUnFold };
