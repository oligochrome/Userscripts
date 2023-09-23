// ==UserScript==
// @name        Bing Search Dark Night Mode Theme 
// @updateURL   https://github.com/oligochrome/scripts/raw/main/Bing Search Dark Night Mode Theme .user.js
// @namespace   english
// @description Bing Search Dark Night Mode Theme - currently undergoing build
// @include     http*://*bing.*/search?*
// @include     http*://*bing*search?*
// @version     2.6
// @run-at document-start
// @grant       GM_addStyle
// ==/UserScript==




function LocalMain2() {




var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '                    body, html, html body {/*\n*/    background: #1d1d1d !important;/*\n*/    background-color: #1d1d1d !important; /*\n*/}body, .b_promoteText, body #b_tween a.ftrH, body #b_tween a.ftrH:hover, .b_expando, body .b_expando h2,body  .b_active a, body .b_active a:visited, body .b_active a:hover, #b_results>.b_pag a, #b_results .b_no, #b_content a.cbl:visited, #b_content a.cbl {/*\n*/    color: #afafaf;/*\n*/}body #b_header {/*\n*/    border-bottom: 1px solid #252525;/*\n*/}body #b_header { /*\n*/    background-color: #4a4a4a;/*\n*/  /*\n*/}body .b_scopebar .b_active a,body  .b_scopebar a:hover,body .id_button:hover {/*\n*/    color: #fbfbfb;/*\n*/}body .b_scopebar,body  .b_scopebar a,body  .b_scopebar a:visited,body  .id_button, body .id_button:visited {/*\n*/    color: #adadad;/*\n*/}body .b_footer { /*\n*/    filter: invert(1);/*\n*/}body #b_results>.b_pag .sb_pagS_bp {/*\n*/    color: #ececec;/*\n*/}body #b_results>.b_pag a:hover {/*\n*/    background-color: #101010;/*\n*/}body #b_results>.b_pag .sb_pagS_bp:hover {/*\n*/    background-color: #fff0;/*\n*/}body #b_results>.b_pag a.sb_pagP:hover, #b_results>.b_pag a.sb_pagN:hover {/*\n*/    background-color: #101010;/*\n*/}body .b_searchboxForm { /*\n*/    filter: invert(1)hue-rotate(180deg)contrast(0.88);/*\n*/}body .b_searchboxForm:hover, body .b_focus .b_searchboxForm {/*\n*/    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 2px 4px 1px rgba(255, 255, 255, 0.18); /*\n*/}body #sw_as #sa_ul:not(:empty) {/*\n*/    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 2px 4px 1px rgba(255, 255, 255, 0.18);/*\n*/}body .b_searchboxForm img{filter:invert(1)hue-rotate(180deg)contrast(1);} body #b_context .b_ans,body  #b_context #wpc_ag {/*\n*/    background-color: #353535;/*\n*/}body #b_results>li {/*\n*/    background-color: #353535;/*\n*/}body .b_cnvsug a { /*\n*/    color: #39a5bd; /*\n*/    background-color: #101010;/*\n*/    border: 1px solid #4e4e4e; /*\n*/}body .b_cnvsug a:hover {/*\n*/    color: #07c0f7; /*\n*/    border-color: #232323;/*\n*/    background-color: #2f2f2f; /*\n*/}body .b_mt .b_focusLabel {/*\n*/    color: #ababab; /*\n*/}body #b_context .b_entityTitle, #b_results .b_entityTitle {/*\n*/    color: #d4d4d4;/*\n*/}body #b_context .b_entitySubTitle, #b_results .b_entitySubTitle {/*\n*/    color: #a7a7a7;/*\n*/}body #b_context,body  #b_context #wpc_eif {/*\n*/    color: #b5b5b5;/*\n*/}body a, #b_tween a:visited, #b_results .b_no a {/*\n*/    color: #4d94d4;/*\n*/}body #b_context .b_footnote a {/*\n*/    color: #9c9c9c;/*\n*/}body a:visited, body #b_results>li a:visited {/*\n*/    color: #cefffb;/*\n*/}body #b_results>li a ,body #b_results>li a{/*\n*/    color: #a2c4e2;/*\n*/}body #b_results>li a:visited {/*\n*/    color: #cefffb;/*\n*/}body cite,body  #b_results cite.sb_crmb a,body  #b_results cite a.sb_metalink,body  #b_results .b_adurl cite a, #bk_wr_container cite a {/*\n*/    color: #9dd6bc;/*\n*/}body .b_caption, body .snippet {/*\n*/    color: #ccc;/*\n*/}#b_results, #b_results .b_defaultText, #b_results>.b_pag a:hover, #b_tween .b_toggle:hover, #b_tween .b_highlighted {/*\n*/    color: #c7c7c7;/*\n*/}.sw_ddbk:after, .sw_ddw:after, .sw_ddgn:after, .sw_poi:after, .sw_poia:after, .sw_play:after, .sw_playa:after, .sw_playd:after, .sw_playp:after, .sw_st:after, .sw_sth:after, .sw_ste:after, .sw_st2:after, .sw_plus:after, .sw_tpcg:after, .sw_tpcw:after, .sw_tpcbk:after, .sw_arwh:after, .sb_pagN:after, .sb_pagP:after, .sw_up:after, .sw_down:after, .b_expandToggle:after, .sw_calc:after, .sw_fbi:after, .sw_twi:after, .b_fLogo:after, .b_cm:after, .sw_rmore:after, .sw_tpo:after, .sw_tpoa:after, .sw_lpoi:after, .sw_skp:after { /*\n*/    filter: invert(1);/*\n*/} body .b_idOpen a#id_l,body  a#id_rh.openfo {/*\n*/    color: #c7c7c7;/*\n*/    background-color: #fff0;/*\n*/}body .b_searchboxForm {/*\n*/    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 2px 4px 0 rgba(255, 255, 255, 0.16); /*\n*/}body .sw_meIc:after, body .sw_spd:after, body .sw_pref:after, body .idp_ham:after, body .idp_wlid:after,body  .idp_tw:after { /*\n*/    filter: invert(1);/*\n*/}body .b_logo img { /*\n*/    filter: invert(1)hue-rotate(180deg);/*\n*/}  body .b_caption p strong,  body .b_caption .b_factrow strong,  body .b_secondaryText strong {/*\n*/    color: #ffffff;/*\n*/}body .adbDef{    filter: invert(1);}/*\n*/#rfPane {/*\n*/    background: #1d1d1d; /*\n*/}body .touchQuery .carousel .carousel-controls, .touchQuery .carousel .items, .touchQuery .carousel .item, .touchQuery .carousel .carousel-controls .nav_left, .touchQuery .carousel .carousel-controls .nav_right {/*\n*/    background: #fff0;/*\n*/}body .carousel {/*\n*/    position: relative;/*\n*/    background: #4a4a4a00;/*\n*/}body .touchQuery .carousel .nav_left>div, .touchQuery .carousel .nav_right>div {/*\n*/    background: #000;/*\n*/    box-shadow: 1px 1px 10px #000; /*\n*/}body .dg_b { /*\n*/    background-color: #1d1d1d;/*\n*/    /*\n*/}body .inline_tile .carousel {/*\n*/    background-color: #f5f5f500;/*\n*/}body .iuscp {/*\n*/    background: #fff0; /*\n*/    border: 1px solid #e6e6e626;/*\n*/}body .inline_tile .carousel h2 { /*\n*/    color: #bfbfbf; /*\n*/}body #miniheader table {/*\n*/    background-color: #1f1f1f; /*\n*/}body #miniheader #miniheader_searchbox .b_searchboxForm {/*\n*/    box-shadow: 0 0 0 1px rgba(0,0,0,.1), 0 2px 4px 0 rgba(0,0,0,.16);/*\n*/    -webkit-box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 2px 4px 0 rgba(255, 255, 255, 0.16); /*\n*/}body .ftrP11 { /*\n*/    color: #e8e8e8;/*\n*/}body .ftrSSL { /*\n*/    color: #a7a7a7; /*\n*/}body span#fltIdtLnk { /*\n*/    color: #c3c3c3;/*\n*/}body #ftrB { /*\n*/    background-color: #eaeaea00; /*\n*/}body #ftr_pane { /*\n*/    background-color: #313131;/*\n*/}body #fltIdtLnk img { /*\n*/    filter: invert(1);/*\n*/}  body .touchQuery .carousel .carousel-controls, .touchQuery .carousel .items, .touchQuery .carousel .item, .touchQuery .carousel .carousel-controls .nav_left, .touchQuery .carousel .carousel-controls .nav_right {/*\n*/    background: #fff0;/*\n*/} body #rfPane {/*\n*/    background: #fff0; /*\n*/} body #tabcontrol_7_8F3661_menu .tab-active { /*\n*/    background-color: #232323;/*\n*/ /*\n*/    color: #d8d8d8;/*\n*/}  body /*\n*/#tabcontrol_7_8F3661_menu .tab-active:hover {/*\n*/    color: #fff;/*\n*/} body .tab-navl.tab-disable, .tab-navr.tab-disable {/*\n*/    background-color: #ffffff00;/*\n*/    color: #e2e2e2;/*\n*/} body .tab-navl.tab-disable:hover, .tab-navr.tab-disable:hover {/*\n*/    background-color: #ffffff00;/*\n*/    color: #444;/*\n*/} body .tab-head svg{filter:invert(1);}#tabcontrol_7_8F3661_menu>li {/*\n*/    background-color: #ffffff00;/*\n*/ /*\n*/    color: #adadad;/*\n*/} body #tabcontrol_7_8F3661_menu>li:hover {/*\n*/    color: #e2e2e2;/*\n*/    position: relative;/*\n*/} body .rc_herotabheader .tab-head {/*\n*/    border-bottom: 1px #585858;/*\n*/    border-bottom-style: double;/*\n*/} body .tab-navr,  body .tab-navl {/*\n*/    background-color: #ffffff00;/*\n*/} body .tab-navl:hover, .tab-navr:hover {/*\n*/    background-color: #212121;/*\n*/    color: #444;/*\n*/}body .tab-menu .tab-active {/*\n*/    box-shadow: inset 0 -3px 0 0 #111;/*\n*/    background-color: #ffffff00  !important ;/*\n*/    line-height: 40px;/*\n*/    color: #e0e0e0  !important ;/*\n*/} .tab-menu li {/*\n*/    background-color: #ffffff00  !important ; /*\n*/    color: #bfbfbf  !important ;/*\n*/} .tab-menu .tab-navl:hover,  .tab-menu .tab-navr:hover {/*\n*/    background-color: #ccc0 !important ;/*\n*/    color: #444 !important ;/*\n*/} .tab-menu li:hover {    color: #fff  !important  ; }  body .b_top, body  .b_top .b_promoteText {/*\n*/    color: #b7b7b7;/*\n*/} body .b_ans.b_topborder .btm_sml a {/*\n*/    background-color: #292929;/*\n*/} body .b_ans.b_topborder .btm_sml a:hover {/*\n*/    background-color: #292929;/*\n*/} body #b_results .b_ans.b_topborder .btm_sml .chevronUp,  body #b_results .b_ans.b_topborder .btm_sml .chevronDown {/*\n*/    height: 40px;/*\n*/    width: 40px;/*\n*/    line-height: 40px;/*\n*/    margin-left: -20px;/*\n*/    filter: invert(1)hue-rotate(180deg);/*\n*/}body .news-side-nav { /*\n*/    box-shadow: 1px 1px 0 0 rgba(255, 255, 255, 0.08), 1px 1px 4px 0 rgba(255, 255, 255, 0.1);/*\n*/    transition: .4s cubic-bezier(.4,0,.2,1);/*\n*/    filter: invert(1)hue-rotate(180deg)contrast(0.88);/*\n*/}body .nf .menu ul li a, .sfisi { /*\n*/    color: #c7c7c7; /*\n*/    background: #3c3c3c; /*\n*/}body .nf .menu ul li:hover .l1,body  .nf .fs {/*\n*/    background: #000;/*\n*/}body .sfisi:hover {/*\n*/    background: #000;/*\n*/}body .sfim {/*\n*/    border-right: 1px solid #1d1d1d;/*\n*/}body .sfal,body  .sfar { /*\n*/    filter: invert(1);/*\n*/}body .bnewsitem,body  .newsitem {/*\n*/    background-color: #2f2f2f; /*\n*/}body .newsitem .title { /*\n*/    color: #d8d8d8; /*\n*/} body .newsitem .snippet { /*\n*/    color: #c1c1c1; /*\n*/}body .nf .menu ul li a,body  .sfisi { /*\n*/    color: #bfbfbf; /*\n*/    background: #444444; /*\n*/}body #news .nf .menu>ul>li>ul { /*\n*/    background: #101010; /*\n*/}body #news .nf .menu>ul>li>ul>li>a:hover {/*\n*/    background: #292929;/*\n*/}body .dg_b .dg_u {/*\n*/    background: #40404000;/*\n*/}body .mc_vtvc {/*\n*/    background-color: #2f2f2f; /*\n*/}body .mc_vtvc_title {/*\n*/    color: #dadada; /*\n*/}body .mc_vtvc_meta_block,body  .mc_vtvc_meta_block a {/*\n*/    color: #ababab;/*\n*/}body .mm_vidch_tl { /*\n*/    color: #f3f3f3; /*\n*/} body .qna_elc .rwrl,body  .df_c .rwrl, #b_results .df_c .b_entityTitle {/*\n*/    color: #dedede;/*\n*/}body #df_listaa .b_module_expansion .b_expansion_text {/*\n*/    color: #d2d2d2;/*\n*/}body #df_listaa .b_module_expansion .b_expansion_wrapper.b_expand {/*\n*/    border-color: #5a5a5a;/*\n*/}body .df_alsocon { /*\n*/    color: #c5c5c5;/*\n*/}body .qna_elc .rwrl, .df_c .rwrl,body  #b_results .df_c .b_entityTitle {/*\n*/    color: #efefef;/*\n*/}body .vidr .vidr_info .title {/*\n*/    color: #eaeaea; /*\n*/}body .va_title_mmftb:after{display:none;}body .vidr .b_factrow { /*\n*/    color: #a9a9a9;/*\n*/}body .vidr .vidr_meta_source {/*\n*/    color: #5ad4a2;/*\n*/}body .df_y,body  .df_n { /*\n*/    filter: invert(1)hue-rotate(180deg)contrast(0.7);/*\n*/}body .b_algoTextCarousel .b_slidebar .slide .b_text {/*\n*/ /*\n*/    color: #c3c3c3; /*\n*/}div.wpcbc .b_fcv2 tr {/*\n*/    border-bottom: 1px solid #4c4c4c;/*\n*/    border-top: 1px solid #404040;/*\n*/    border-collapse: collapse;/*\n*/} body #b_results>.b_top .b_prominentFocusLabel,body  #b_results>.b_top .b_topTitle,body  #b_results>.b_top .b_focusTextExtraSmall, body #b_results>.b_top .b_focusTextExtraSmall a,body  #b_results>.b_top .b_focusTextSmall,body  #b_results>.b_top .b_focusTextSmall a,body  #b_results>.b_top .b_focusTextMedium, body #b_results>.b_top .b_focusTextMedium a,body  #b_results>.b_top .b_focusTextLarge,body  #b_results>.b_top .b_focusTextLarge a {/*\n*/    color: #fff;/*\n*/}body .dc_prn {/*\n*/    color: #adadad; /*\n*/}body .dc_st { /*\n*/    color: #d4d4d4;/*\n*/}body .dc_mn {/*\n*/    color: #d8d8d8;/*\n*/}body .b_tHeader,body  .b_demoteText,body  .b_secondaryText, body .b_attribution, body .b_factrow,body  .b_focusLabel,body  .b_footnote, body .b_ad .b_adlabel,body  #b_tween .b_dropdown a,body  .b_expando .b_subModule,body  .b_expando .b_suppModule, body .b_algo .b_vList td,body  #b_content .b_lowFocusLink a,body  #b_context .b_secondaryText, body #b_context .b_attribution, body #b_context .b_factrow,body  #b_context .b_footnote, body #b_context .b_ad .b_adlabel, body .b_expando .b_secondaryText,body  .b_expando .b_attribution,body  .b_expando .b_factrow,body  .b_expando .b_footnote {/*\n*/    color: #ffffff;/*\n*/}body #df_listaa .b_module_expansion .b_expansion_text {/*\n*/    color: #dcdcdc;/*\n*/    font-size: 16px;/*\n*/    line-height: 20px;/*\n*/    max-width: calc(100% - 46px);/*\n*/} .t-code {     filter: invert(1)hue-rotate(180deg)contrast(0.88);}body .nws_itm, .nws_itmb { /*\n*/    background-color: #252525; /*\n*/}body #b_results>li .na_cnt a, body  .na_cnt .na_t {/*\n*/    color: #f3f3f3;/*\n*/}body .na_cnt .citm_spt, #ans_nws .na_cnt .citm_spt, body  #ans_nws .na_cnt .itm_tlt_snp .itm_spt, body  #nse_p .na_cnt .itm_tlt_snp .itm_spt {/*\n*/ /*\n*/    color: #adadad; /*\n*/}body .na_cl .na_citem, body  .na_cl .slide.see_more {/*\n*/ /*\n*/    background-color: #252525;/*\n*/}body .b_overlay .btn .cr { /*\n*/    filter: invert(1)hue-rotate(180deg);/*\n*/}body #b_results>li .nws_smb a {/*\n*/    color: #3aacff;/*\n*/} .nws_itm, .nws_itmb {     background-color: #272727  !important ; }  body #pole .carousel, #bopblock .carousel,body  #ent-car-exp.carousel,body  #ent-car-exp-img.carousel {/*\n*/    background: #404040;/*\n*/}body .carousel, .carousel a {/*\n*/    color: #ccc;/*\n*/}body .carousel-title {/*\n*/    color: #fff;/*\n*/}body .carousel .item.sel .card {/*\n*/    background: #232323; /*\n*/}body .carousel .lightcar .item .card:hover,body  .carousel .lightcar .item .card-hover,body  .carousel .lightcar .item.sel .card:hover, .carousel .lightcar .item.sel .card-hover {/*\n*/    background: #000;/*\n*/    /*\n*/}body .carousel .item .det .col div:hover {/*\n*/    background: #252525;/*\n*/    border-bottom: 1px solid #151515;/*\n*/}body .carousel .item .det .col div:first-child {/*\n*/    border-top: 1px solid #151515;/*\n*/}body .carousel .item .det .col div { /*\n*/    border-bottom: 1px solid #151515; /*\n*/}body .carousel .lightcar .nav_container>span { /*\n*/    box-shadow: 0 8px 6px 2px rgba(255, 255, 255, 0.25);/*\n*/    -webkit-box-shadow: 0 8px 6px 2px rgba(255, 255, 255, 0.25);/*\n*/    filter: invert(1);/*\n*/}body .b_imgSet .b_imgSetData p a {/*\n*/    color: #bfbfbf;/*\n*/}body .carousel .lightcar .item .card {/*\n*/    background: #1b1b1b; /*\n*/} body #b_results .wiki_big p.b_paractl {/*\n*/    color: #d8d8d8;/*\n*/}/*\n*//*\n*/body .wiki_big .dataVC {/*\n*/   /*\n*/    color: #499ee8;/*\n*/}/*\n*/body .b_algo.b_algoBorder .wiki_big .sml.topanswer a,body  .b_algo.b_algoBorder .wiki_big .btm_sml a {/*\n*/    background-color: #272727;/*\n*/   /*\n*/}body .b_algo.b_algoBorder .wiki_big .btm_sml a:hover {/*\n*/    background-color: #272727;/*\n*/}body .b_algo.b_algoBorder .wiki_big .expreftext {/*\n*/  /*\n*/    color: #c3c3c3;/*\n*/}body .b_algo.b_algoBorder .wiki_big .btm_sml .chevronUp, body .b_algo.b_algoBorder .wiki_big .btm_sml .chevronDown {/*\n*/  /*\n*/    filter: invert(1)hue-rotate(180deg);/*\n*/}body .b_algo.b_algoBorder .wiki_big .chevronContainerDown, body .b_algo.b_algoBorder .wiki_big .chevronContainerDown:active {/*\n*/    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.05), 0 2px 3px 0 rgba(255, 255, 255, 0.1);/*\n*/}body div.wpcbc .b_fcv2 tr {/*\n*/    border-bottom: 1px solid #5d5d5d;/*\n*/    border-top: 1px solid #5d5d5d; /*\n*/}body .ac-border {/*\n*/    border-bottom: 1px solid #5d5d5d;/*\n*/}body .infoCardIcons { /*\n*/    border-top: 1px solid #5d5d5d;/*\n*/}body #b_context .b_subModule,body  #b_results .b_subModule {/*\n*/    border-bottom: 1px solid #5d5d5d;/*\n*/}.disambig-outline>ul>li {/*\n*/    border-top: 1px solid #5d5d5d;/*\n*/ /*\n*/} body #b_results p {/*\n*/    color: #e6e6e6;/*\n*/}body  .b_scopebar,body   #b_header .b_scopebar a,body   #b_header .b_scopebar .b_active,body   .b_searchbox,body   #sw_as {/*\n*/    color: #fff;/*\n*/}body  #HBFlyoutTop { /*\n*/    filter: invert(1)hue-rotate(180deg)contrast(0.88);/*\n*/}body  #HBFlyoutTop img{ /*\n*/    filter: invert(1)hue-rotate(180deg)contrast(1.22);/*\n*/}body  .b_mpref {/*\n*/    background-color: #313131;/*\n*/     /*\n*/} body  #b_results .b_pag a.sb_pagS {/*\n*/    color: #d8d8d8;/*\n*/   /*\n*/} body .b_scopebar ul:after {/*\n*/    /*\n*/    background: linear-gradient(to right,rgba(245,245,245,0) 0%,#f5f5f500 100%);/*\n*/}body #tallhead>.b_logoArea>.b_logo {/*\n*/    margin: 8px 0 0;/*\n*/    filter: invert(1);/*\n*/}body .b_expmob_rc {/*\n*/    /*\n*/    filter: invert(1)hue-rotate(180deg)contrast(0.88);/*\n*/}body #b_content .b_slyGridItem .eg_meta ul {/*\n*/    color: #bfbfbf;/*\n*/   /*\n*/}body .b_dgTitle h2 {/*\n*/   /*\n*/    color: #e6e6e6;/*\n*/   /*\n*/}body #b_results:not(.peek)>.b_msg, body #b_results:not(.peek)>.b_pag {/*\n*/    background-color: #3e3e3e  !important ;/*\n*/ /*\n*/}   body .b_searchbox  {    color: #000  !important ;} .rcDictionary {/*\n*/    color: #ddd  !important ;/*\n*/}.recommendationsTableTitle h2 { /*\n*/    color: #bbb  !important; /*\n*/}.fbans > div > a, .fbans > div > a:visited {/*\n*/    color: #bdbdbd !important;/*\n*/}                     ';
document.getElementsByTagName('head')[0].appendChild(style);


    // Your code goes here.
}

window.addEventListener ("load", LocalMain2, false);


LocalMain();