/*
 * 공유 네비게이션 pane — 페이지 목록을 이 파일 한 곳에서만 관리한다.
 * 각 HTML은 <script src="(경로)/assets/nav.js"></script> 한 줄만 넣으면 된다.
 * 문서를 추가할 때는 아래 NAV_GROUPS의 해당 그룹에 { href, label } 한 줄만 더한다.
 *   - href: repo 루트 기준 경로 (예: "self-guide-aws.html", "lessons/0001-....html")
 * fetch를 쓰지 않으므로 file:// 로 열어도 동작한다.
 */
(function () {
  "use strict";

  var NAV_GROUPS = [
    {
      title: "Lessons",
      items: [
        { href: "lessons/0001-what-gateway-centralizes.html", label: "1 · 개요" },
        { href: "lessons/0002-components.html",               label: "2 · gateway.yaml 설정" },
        { href: "lessons/0003-how-it-works.html",             label: "3 · 작동 방식" },
        { href: "lessons/0004-device-auth-flow.html",         label: "4 · 디바이스 인증" }
      ]
    },
    {
      title: "Guides",
      items: [
        { href: "self-guide-aws.html",             label: "실습 가이드" },
        { href: "build-images.html",               label: "이미지 준비" },
        { href: "setup-client-vpn.html",           label: "Client VPN 설정" },
        { href: "setup-route53-private-zone.html", label: "Route53 Private Zone 설정" },
        { href: "setup-service-discovery.html",    label: "Service Discovery" },
        { href: "setup-cognito.html",              label: "Cognito 설정" }
      ]
    }
  ];

  // 현재 페이지가 lessons/ 하위인지 판단해, 링크·에셋 경로 prefix를 계산한다.
  var path = window.location.pathname;
  var inSubdir = /\/lessons\//.test(path);
  var prefix = inSubdir ? "../" : "";

  // 현재 파일의 repo 루트 기준 경로 (비교용). 예: "lessons/0001-....html" 또는 "self-guide-aws.html"
  var currentFile = path.substring(path.lastIndexOf("/") + 1) || "index.html";
  var currentRootPath = inSubdir ? "lessons/" + currentFile : currentFile;

  function build() {
    var aside = document.createElement("aside");
    aside.className = "site-nav";

    var toggle = document.createElement("button");
    toggle.className = "site-nav-toggle";
    toggle.type = "button";
    toggle.setAttribute("aria-label", "탐색 메뉴 열기/닫기");
    toggle.textContent = "☰ 문서 목록";
    toggle.addEventListener("click", function () {
      aside.classList.toggle("open");
    });
    aside.appendChild(toggle);

    var nav = document.createElement("nav");
    nav.className = "site-nav-list";
    nav.setAttribute("aria-label", "문서 탐색");

    NAV_GROUPS.forEach(function (group) {
      var h = document.createElement("div");
      h.className = "site-nav-group";
      h.textContent = group.title;
      nav.appendChild(h);

      group.items.forEach(function (item) {
        var isCurrent = item.href === currentRootPath;
        var el = document.createElement(isCurrent ? "span" : "a");
        el.className = "site-nav-link" + (isCurrent ? " current" : "");
        el.textContent = item.label;
        if (!isCurrent) {
          el.href = prefix + item.href;
        } else {
          el.setAttribute("aria-current", "page");
        }
        nav.appendChild(el);
      });
    });

    aside.appendChild(nav);
    return aside;
  }

  function insert() {
    // body 맨 앞에 pane을 넣고, .layout으로 pane + .page를 감싼다.
    var page = document.querySelector(".page");
    var aside = build();

    if (page && page.parentNode === document.body) {
      var layout = document.createElement("div");
      layout.className = "layout";
      document.body.insertBefore(layout, page);
      layout.appendChild(aside);
      layout.appendChild(page);
    } else {
      // .page 구조가 다를 경우: 안전하게 body 맨 앞에만 삽입
      document.body.insertBefore(aside, document.body.firstChild);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", insert);
  } else {
    insert();
  }
})();
