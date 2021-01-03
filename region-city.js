var contents = {
  setRemoveContents:function(id) {
    var el=document.getElementById(id);
    while(el.childNodes.length !== 0){
    el.removeChild(el.childNodes[0]);
    }
  },
  setRemoveStyle:function(bColor, tColor) {
    var text = document.querySelector('#region');
    if(text.textContent!==""){
      document.querySelector('#' + text.textContent).style.backgroundColor = bColor;
      document.querySelector('#' + text.textContent).style.color = tColor;
    }
  },
  setButton:function() {
    if (document.querySelector('#myBtn').children.length===0){
      var btn = document.createElement("button");
      btn.innerHTML= "Open all URL";
      btn.onclick= function(){
        clickButton();
      };
      document.querySelector('#myBtn').appendChild(btn);
    }
  }
}
function clickdo(getRegion) {
  // 인트로 삭제
  contents.setRemoveContents('intro');
  // 스타일 제거
  contents.setRemoveStyle('#EBF7FF', 'black');
  // button 생성
  contents.setButton();
  // 스타일 활성화
  document.querySelector('#region').textContent = getRegion;
  document.querySelector('#'+getRegion).style.backgroundColor = '#5DD3B0';
  document.querySelector('#'+getRegion).style.color = 'white';
  // 기존 시티리스트 삭제
  contents.setRemoveContents('cityList');
  // 시티리스트 받아옴
  var el=document.getElementById('cityList');
  var html = '';
  var ul = document.createElement('ul');
  var object;
  for(var i=0; i<objectList.length; i++) {
    object = objectList[i];
    if(object['name']===getRegion){
      for (var i=0; i<object['cityList'].length; i++) {
          var city = object['cityList'][i];
          html += '<li><a id="a' + i + '" href="' + city['url'] + '" target="_blank">' + city['name'] + '</a></li>';
      }
      ul.innerHTML = html;
      el.appendChild(ul);
      console.log(ul);
      break;
    }
  }
}
function clickButton() {
  var from = 0;
  var to = document.getElementById('cityList').getElementsByTagName("li").length
  for (var i=from; i<to; i++) {
    var id = 'a'+i;
    setTimeout(clickA, 1000*i, id);
  }
}
function clickA(id) {
  console.log(id);
  var el = document.getElementById(id);
  console.log(el);
  el.click();
}
var objectList = [
  {'name': '경기도', 'cityList':[
      {'name': '경기도청',    'url': 'https://www.gg.go.kr/'},
      {'name': '서울특별시',  'url': 'https://www.seoul.go.kr/news/news_notice.do#list/1'},
      {'name': '인천광역시',  'url': 'https://www.incheon.go.kr/IC010101'},
      {'name': '가평군',      'url': 'https://www.gp.go.kr/portal/contents.do?key=502'},
      {'name': '강화군',      'url': 'https://www.ganghwa.go.kr/open_content/main/ganghwa/news/announce.jsp'},
      {'name': '고양시',      'url': 'http://www.goyang.go.kr/www/link/BD_notice.do'},
      {'name': '구리시',      'url': 'http://www.guri.go.kr/cms/content/view/1676'},
      {'name': '김포시',      'url': 'http://www.gimpo.go.kr/portal/ntfcPblancList.do?key=1004&cate_cd=1&searchCnd=40900000000'},
      {'name': '군포시',      'url': 'http://www.gunpo.go.kr/www/contents.do?key=3907'},
      {'name': '과천시',      'url': 'https://www.gccity.go.kr/main/page.do?mCode=B010030010&cIdx=465'},
      {'name': '광명시',      'url': 'http://www.gm.go.kr/pt/user/nftcBbs/BD_selectNftcBbsList.do?q_nftcBbsCode=1001'},
      {'name': '광주시',      'url': 'https://www.gjcity.go.kr/portal/saeol/gosi/list.do?mId=0202010000'},
      {'name': '남양주시',    'url': 'https://www.nyj.go.kr/main/185'},
      {'name': '동두천',      'url': 'https://www.ddc.go.kr/ddc/gosiList.do?key=107&code=01'},
      {'name': '부천시',      'url': 'https://www.bucheon.go.kr/site/main/index148'},
      {'name': '성남시',      'url': 'https://www.seongnam.go.kr/city/1000499/20044/program.do'},
      {'name': '이천시',      'url': 'https://www.icheon.go.kr/portal/selectNoticeWebList.do?key=1606&searchNotAncmtSeCd=01'},
      {'name': '여주시',      'url': 'https://www.yeoju.go.kr/www/jsp/project/gosi/list.jsp'},
      {'name': '안성시',      'url': 'https://www.anseong.go.kr/portal/saeol/gosiList.do?mId=0401040000'},
      {'name': '안양시',      'url': 'https://www.anyang.go.kr/main/selectEminwonList.do?key=263&notAncmtSeCode=01,04&ofr_pageSize=10'},
      {'name': '양주시',      'url': 'https://www.yangju.go.kr/www/contents.do?key=211'},
      {'name': '의정부시',    'url': 'https://www.ui4u.go.kr/portal/saeol/gosiList.do?seCode=01&mId=0301040000'},
      {'name': '의왕시',      'url': 'https://www.uiwang.go.kr/UWKORINFO0701'},
      {'name': '용인시',      'url': 'http://www.yongin.go.kr/home/yiNw/yiNwStable/yiNwStable02/yiNwStable02_01.jsp'},
      {'name': '안산시',      'url': 'https://www.ansan.go.kr/www/selectBbsNttList.do?bbsNo=373&key=271'},
      {'name': '양평군',      'url': 'https://www.yp21.go.kr/www/selectBbsNttList.do?bbsNo=5&key=1119'},
      {'name': '오산시',      'url': 'http://www.osan.go.kr/portal/saeol/gosi/list.do?mId=0302010000'},
      {'name': '파주시',      'url': 'https://www.paju.go.kr/user/board/BD_board.list.do?bbsCd=1022&q_ctgCd=4063'},
      {'name': '포천시',      'url': 'http://www.pocheon.go.kr/www/contents.do?key=5175&'},
      {'name': '평택시',      'url': 'https://www.pyeongtaek.go.kr/pyeongtaek/saeol/gosiList.do?seCode=01&mId=0401020000'},
      {'name': '화성시',      'url': 'http://www.hscity.go.kr/www/link/BD_notice.do'},
      {'name': '하남시',      'url': 'https://www.hanam.go.kr/www/selectBbsNttList.do?bbsNo=30&key=170'},
    ]
  },
  {'name': '충청도', 'cityList':[
      {'name': '충청남도',      'url': 'http://www.chungnam.go.kr/cnnet/board.do?mnu_cd=CNNMENU00138'},
      {'name': '충청북도',      'url': 'http://www.chungbuk.go.kr/www/index.do?firstFlag=no'},
      {'name': '세종특별시자치','url': 'https://www.sejong.go.kr/index.jsp'},
      {'name': '대전광역시',    'url': 'https://www.daejeon.go.kr/drh/board/boardNormalList.do?boardId=normal_0096&menuSeq=1631'},
      {'name': '계룡시',      'url': 'https://www.gyeryong.go.kr/_prog/_board/?code=m4_10_02&site_dvs_cd=kr&menu_dvs_cd=030102'},
      {'name': '공주시',      'url': 'https://www.gongju.go.kr/kr/index.do'},
      {'name': '금산군',      'url': 'https://www.geumsan.go.kr/kr/'},
      {'name': '괴산군',      'url': 'https://www.goesan.go.kr/www/iframe.do?key=1438&url=https://eminwon.goesan.go.kr/emwp/jsp/ofr/OfrNotAncmtLSub.jsp?not_ancmt_se_code=01,02,03,04'},
      {'name': '논산시',      'url': 'http://www.nonsan.go.kr/kor/html/sub03/030102.html'},
      {'name': '당진시',      'url': 'http://www.dangjin.go.kr/kor/sub03_03_01_01.do'},
      {'name': '단양군',      'url': 'https://www.danyang.go.kr/dy21/%EC%97%B4%EB%A6%B0%EB%A7%88%EB%8B%B9/%EC%95%8C%EB%A6%BC%EB%A7%88%EB%8B%B9/%EA%B3%A0%EC%8B%9C%EA%B3%B5%EA%B3%A0'},
      {'name': '보은군',      'url': 'https://www.boeun.go.kr/www/selectBbsNttList.do?bbsNo=66&key=802'},
      {'name': '보령시',      'url': 'http://www.brcn.go.kr/prog/eminwon/kor/BB/sub04_03_01/list.do'},
      {'name': '부여군',      'url': 'http://www.buyeo.go.kr/_prog/_board/?code=news_02&site_dvs_cd=kr&menu_dvs_cd=0402'},
      {'name': '서산시',      'url': 'http://www.seosan.go.kr/www/selectBbsNttList.do?bbsNo=97&key=1256'},
      {'name': '서천군',      'url': 'http://www.seocheon.go.kr/kor/sub04_06_01.do'},
      {'name': '아산시',      'url': 'https://www.asan.go.kr/main/cms/?no=257'},
      {'name': '옥천군',      'url': 'https://www.oc.go.kr/www/selectBbsNttList.do?bbsNo=40&key=236&'},
      {'name': '음성군',      'url': 'https://www.eumseong.go.kr/www/selectBbsNttList.do?bbsNo=6&key=78'},
      {'name': '예산군',      'url': 'http://www.yesan.go.kr/kor/sub02_01_05.do'},
      {'name': '영동군',      'url': 'https://www.yd21.go.kr/kr/html/sub02/020103.html'},
      {'name': '진천군',      'url': 'http://www.jincheon.go.kr/home/sub.do?menukey=235'},
      {'name': '제천시',      'url': 'https://www.jecheon.go.kr/www/webNotice.do?key=121&searchCnd2=1'},
      {'name': '천안시',      'url': 'https://www.cheonan.go.kr/cop/bbs/BBSMSTR_000000000462/selectBoardList.do'},
      {'name': '청양군',      'url': 'http://www.cheongyang.go.kr/kor/sub04_02_03.do'},
      {'name': '청주시',      'url': 'https://www.cheongju.go.kr/www/selectBbsNttList.do?bbsNo=40&key=279'},
      {'name': '충주시',      'url': 'https://www.chungju.go.kr/www/index.do'},
      {'name': '태안군',      'url': 'http://www.taean.go.kr/kor/sub02_03_01.do'},
      {'name': '홍성군',      'url': 'http://www.hongseong.go.kr/kor/'},
    ]
  },
  {'name': '전라남도', 'cityList':[
      {'name': '전라남도청',      'url': 'https://www.jeonnam.go.kr/J0203/boardList.do?menuId=jeonnam0203000000'},
      {'name': '광주광역시',      'url': 'https://www.gwangju.go.kr/boardList.do?boardId=BD_0000000022&pageId=www788'},
      {'name': '광양시',      'url': 'http://www.gwangyang.go.kr/board/list.gwangyang?boardId=BBS_0000107&menuCd=DOM_000000103004002000&contentsSid=1809&cpath='},
      {'name': '나주시',      'url': 'http://www.naju.go.kr/www/administration/notice/legislation'},
      {'name': '순천시',      'url': 'http://www.suncheon.go.kr/kr/news/0004/0005/0001/'},
      {'name': '여수시',      'url': 'http://www.yeosu.go.kr/www/information/mn01/mn0105/mn010501'},
      {'name': '목포시',      'url': 'http://www.mokpo.go.kr/www/open_administration/city_news/notification'},
      {'name': '신안군',      'url': 'http://www.shinan.go.kr/home/www/openinfo/participation_07/participation_07_04/page.wscms'},
      {'name': '진도군',      'url': 'https://www.jindo.go.kr/home/gosi/general.cs?m=24'},
      {'name': '완도군',      'url': 'http://www.wando.go.kr/www/administration/administration_info/announcement_notice'},
      {'name': '장성군',      'url': 'http://www.jangseong.go.kr/home/www/news/jangseong/announcement'},
      {'name': '영광군',      'url': 'https://www.yeonggwang.go.kr/subpage/?site=headquarter&mn=1076'},
      {'name': '함평군',      'url': 'https://www.hampyeong.go.kr/pg/GosiList.do?pageId=www273'},
      {'name': '무안군',      'url': 'http://www.muan.go.kr/www/openmuan/new/announcement'},
      {'name': '영암군',      'url': 'https://www.yeongam.go.kr/home/www/open_information/yeongam_news/announcement'},
      {'name': '해남군',      'url': 'http://www.haenam.go.kr/planweb/board/list.9is?contentUid=18e3368f5d745106015de961fbbd205e&boardUid=18e3368f644b01470164eeb23d7b30f5&contentUid=18e3368f5d745106015de961fbbd205e'},
      {'name': '강진군',      'url': 'http://www.gangjin.go.kr/www/government/notify'},
      {'name': '장흥군',      'url': 'http://www.jangheung.go.kr/www/organization/news/notification'},
      {'name': '화순군',      'url': 'https://www.hwasun.go.kr/index.do?S=S01'},
      {'name': '보성군',      'url': 'http://www.boseong.go.kr/www/open_administration/city_news/notification'},
      {'name': '고흥군',      'url': 'https://www.goheung.go.kr/boardList.do?pageId=www96&boardId=BD_00018'},
      {'name': '구례군',      'url': 'https://www.gurye.go.kr/board/GosiList.do?menuNo=115004002000'},
      {'name': '곡성군',      'url': 'https://www.gokseong.go.kr/main/?pid=651'},
      {'name': '담양군',      'url': 'http://www.damyang.go.kr/index.damyang?menuCd=DOM_000000104002001000'},
    ]
  },
  {'name': '전라북도', 'cityList':[
      {'name': '전라북도청',  'url': 'http://www.jeonbuk.go.kr/board/list.jeonbuk?boardId=BBS_0000012&menuCd=DOM_000000103001002001&contentsSid=841&cpath='},
      {'name': '군산시',      'url': 'https://www.gunsan.go.kr/main'},
      {'name': '고창군',      'url': 'https://www.gochang.go.kr/index.gochang?menuCd=DOM_000000102003001000'},
      {'name': '김제시',      'url': 'http://www.gimje.go.kr/board/list.gimje;jsessionid=UZDprwUr7M9vfewWnb1Ogg4NqaKNWdwZsLlptac9SgYazGv8V7I9AgR7y4sObdt8.was01_servlet_engine6?boardId=BBS_0000044&menuCd=DOM_000000105001003000&contentsSid=1433&cpath='},
      {'name': '남원시',      'url': 'http://www.namwon.go.kr/board/list.do?boardId=BBS_0000005&menuCd=DOM_000000202001003000&contentsSid=47&cpath='},
      {'name': '무주군',      'url': 'https://www.muju.go.kr/index.9is?contentUid=ff8080816c5f9d47016cbd3b2a4a006f'},
      {'name': '부안군',      'url': 'https://www.buan.go.kr/board/list.buan?boardId=BBS_0000191&menuCd=DOM_000000103001003000&contentsSid=472&cpath='},
      {'name': '순창군',      'url': 'http://www.sunchang.go.kr/index.sunchang?contentsSid=1'},
      {'name': '임실군',      'url': 'http://www.imsil.go.kr/index.sko?menuCd=AA03005006000'},
      {'name': '익산시',      'url': 'http://www.iksan.go.kr/index.iksan?menuCd=DOM_000002003009003000#'},
      {'name': '정읍시',      'url': 'http://www.jeongeup.go.kr/index.jeongeup'},
      {'name': '장수군',      'url': 'http://www.jangsu.go.kr/index.jangsu?menuCd=DOM_000000402001005001'},
      {'name': '전주시',      'url': 'http://www.jeonju.go.kr/planweb/board/list.9is?contentUid=9be517a769953e5f0169c1ef6922064b&boardUid=9be517a74f8dee91014f90f9996c0740&contentUid=9be517a769953e5f0169c1ef6922064b&subPath='},
      {'name': '진안군',      'url': 'https://www.jinan.go.kr/index.jinan'},
      {'name': '완주군',      'url': 'http://www.wanju.go.kr/index.wanju?menuCd=DOM_000000102002002000'},
    ]
  },
  {'name': '경상남도', 'cityList':[
      {'name': '경상남도',    'url': 'https://gbgs.go.kr/open_content/ko/page.do?mnu_uid=2159'},
      {'name': '부산광역시',  'url': 'http://www.busan.go.kr/nbnews'},
      {'name': '울산광역시',  'url': 'https://www.ulsan.go.kr/u/rep/main.ulsan'},
      {'name': '김해시',      'url': 'http://www.gimhae.go.kr/main.web'},
      {'name': '거제시',      'url': 'http://www.geoje.go.kr/board/list.geoje?boardId=BBS_0000008&menuCd=DOM_000008902001001000'},
      {'name': '밀양시',      'url': 'https://www.miryang.go.kr/web/index.do'},
      {'name': '사천시',      'url': 'https://www.sacheon.go.kr/news/00009/00014.web'},
      {'name': '양산시',      'url': 'https://www.yangsan.go.kr/main.do'},
      {'name': '진주시',      'url': 'http://www.jinju.go.kr/main.web'},
      {'name': '창원시',      'url': 'https://www.changwon.go.kr/portal/bbs/list.do?ptIdx=100&mId=0201010000'},
      {'name': '통영시',      'url': 'https://www.tongyeong.go.kr/00852/00853/00858.web'},
      {'name': '제주특별자치도',      'url': 'https://www.jeju.go.kr/index.htm'},
      {'name': '제주시',      'url': 'http://www.jejusi.go.kr/index.ac'},
      {'name': '서귀포시',    'url': 'https://www.seogwipo.go.kr/index.htm'},
      {'name': '거창군',      'url': 'http://www.geochang.go.kr/saeol/gosi.do?&pageCd=NW0102000000&siteGubun=news'},
      {'name': '고성군',      'url': 'https://www.goseong.go.kr/index.goseong?menuCd=DOM_000000104001001002'},
      {'name': '남해군',      'url': 'https://www.namhae.go.kr/socialm/board/List.do?gcode=1131&&pageCd=SM010101000&siteGubun=socialm'},
      {'name': '산청군',      'url': 'https://www.sancheong.go.kr/www/index.do'},
      {'name': '의령군',      'url': 'http://www.uiryeong.go.kr/board/list.uiryeong?boardId=BBS_0000070&menuCd=DOM_000000403010001001&contentsSid=606&cpath='},
      {'name': '창녕군',      'url': 'https://www.cng.go.kr/news/00000372/00000373.web'},
      {'name': '함양군',      'url': 'http://www.hygn.go.kr/media/00111/00114.web'},
      {'name': '합천군',      'url': 'https://www.hc.go.kr/04923/04924/04945.web'},
      {'name': '하동군',      'url': 'http://www.hadong.go.kr/media/00008/00009.web'},
    ]
  },
  {'name': '경상북도', 'cityList':[
      {'name': '경상북도',    'url': 'http://www.gb.go.kr/Main/index.html'},
      {'name': '대구광역시',  'url': 'http://www.daegu.go.kr/index.do?menu_id=00000854&menu_link=/icms/bbs/selectBoardList.do?bbsId=BBS_00029'},
      {'name': '경산시',      'url': 'https://gbgs.go.kr/open_content/ko/page.do?mnu_uid=2159'},
      {'name': '경주시',      'url': 'http://www.gyeongju.go.kr/open_content/ko/page.do?mnu_uid=423&'},
      {'name': '김천시',      'url': 'https://www.gc.go.kr/main.do'},
      {'name': '구미시',      'url': 'http://www.gumi.go.kr/portal/saeol/gosiList.do?seCode=01&mId=0401030000'},
      {'name': '문경시',      'url': 'https://www.gbmg.go.kr/portal/saeol/gosi/list.do?mId=0301060000'},
      {'name': '상주시',      'url': 'https://www.sangju.go.kr/board/list.tc?mn=3032&mngNo=726&pageSeq=2613'},
      {'name': '안동시',      'url': 'https://www.andong.go.kr/portal/bbs/list.do?ptIdx=156&mId=0401010000'},
      {'name': '영주시',      'url': 'http://www.yeongju.go.kr/open_content/main/page.do?mnu_uid=1522'},
      {'name': '영천시',      'url': 'https://www.yc.go.kr/portal/saeol/gosi/list.do?mId=0301040000'},
      {'name': '고령군',      'url': 'http://www.goryeong.go.kr/kor/boardList.do?IDX=154&BRD_ID=1023'},
      {'name': '군위군',      'url': 'https://www.gunwi.go.kr/ko/page.do?mnu_uid=170'},
      {'name': '달성군',      'url': 'https://www.dalseong.daegu.kr/index.do?menu_id=00000194'},
      {'name': '봉화군',      'url': 'http://www.bonghwa.go.kr/open.content/ko/news/news/announcement/bonghwa/'},
      {'name': '성주군',      'url': 'https://www.sj.go.kr/page.do?mnu_uid=1044'},
      {'name': '울진군',      'url': 'http://www.uljin.go.kr/index.uljin?menuCd=DOM_000000103002007000'},
      {'name': '울주군',      'url': 'https://www.ulju.ulsan.kr/ulju/gosi01'},
      {'name': '영양군',      'url': 'http://www.yyg.go.kr/www/organization/yyg_news/notification'},
      {'name': '예천군',      'url': 'http://www.ycg.kr/open.content/ko/administrative/news/announcement/'},
      {'name': '청송군',      'url': 'http://www.cs.go.kr/news/00002679/00006203.web'},
      {'name': '청도군',      'url': 'https://www.cheongdo.go.kr/open.content/ko/administration/news/notice/'},
      {'name': '칠곡군',      'url': 'https://www.chilgok.go.kr/01partin/01_02.jsp'},
    ]
  },
  {'name': '강원도', 'cityList':[
      {'name': '강원도청',    'url': 'http://www.provin.gangwon.kr/gw/portal/sub05_02'},
      {'name': '강릉시',      'url': 'https://www.gn.go.kr/www/selectGosiNttList.do?key=263&searchGosiSe=01,04,06'},
      {'name': '고성군',      'url': 'https://www.gwgs.go.kr/kor/sub03_0201.do'},
      {'name': '동해시',      'url': 'http://www.dh.go.kr/pages/sub.htm?nav_code=dh1470757772'},
      {'name': '삼척시',      'url': 'http://www.samcheok.go.kr/media/00084/00095.web'},
      {'name': '속초시',      'url': 'http://www.sokcho.go.kr/portal/openinfo/sokchonews/notification'},
      {'name': '양구군',      'url': 'https://www.yanggu.go.kr/user_sub.php?gid=www&mu_idx=215'},
      {'name': '양양군',      'url': 'https://www.yangyang.go.kr/gw/portal/yyc_news_notifi'},
      {'name': '인제군',      'url': 'http://www.inje.go.kr/portal/adm/bulletin'},
      {'name': '영월군',      'url': 'https://www.yw.go.kr/www/selectBbsNttList.do?bbsNo=17&key=273'},
      {'name': '원주시',      'url': 'https://www.wonju.go.kr/www/selectBbsNttList.do?bbsNo=141&key=217&'},
      {'name': '정선군',      'url': 'https://www.jeongseon.go.kr/portal/openadmin/adminnews/notification'},
      {'name': '춘천시',      'url': 'http://www.chuncheon.go.kr/index.chuncheon?menuCd=DOM_000000505003001000'},
      {'name': '철원군',      'url': 'http://www.cwg.go.kr/site/www/boardList.do?boardSeq=23&key=1240&part=4300030'},
      {'name': '태백시',      'url': 'https://www.taebaek.go.kr/www/selectBbsNttList.do?bbsNo=25&key=352'},
      {'name': '평창군',      'url': 'https://www.pc.go.kr/portal/government/government-notification'},
      {'name': '화천군',      'url': 'http://www.ihc.go.kr/www/contents.do?key=1004'},
      {'name': '홍천군',      'url': 'https://www.hongcheon.go.kr/www/selectBbsNttList.do?key=255&bbsNo=1'},
      {'name': '횡성군',      'url': 'https://www.hsg.go.kr/intro/media/00000074.web'},
    ]
  },
  {'name': '공사', 'cityList':[
      {'name': '부산도시공사',      'url': 'https://www.bmc.busan.kr/bmc/main.do'},
      {'name': '김포도시관리공사',  'url': 'https://www.guc.or.kr/index.asp?'},
      {'name': '주택도시보증공사',  'url': 'http://www.khug.or.kr/index.jsp'},
      {'name': 'SH서울주택도시공사','url': 'https://www.i-sh.co.kr/main/index.do'},
      {'name': '경기주택도시공사',  'url': 'https://www.gh.or.kr/index.do'},
      {'name': '대전도시공사',      'url': 'http://www.dcco.kr/web/board/list.do?mId=113'},
      {'name': 'LH한국토지주택공사','url': 'http://www.lh.or.kr/bbs/list.do?sCode=user&mId=122&mPid=120&bbsSeq=&nttSeq='},
      {'name': '광주광역시도시공사','url': 'http://www.gmcc.co.kr/new/'},
      {'name': '대구도시공사',      'url': 'https://www.duco.or.kr/'},
      {'name': '대구도시철도공사',  'url': 'http://www.dtro.or.kr/'},
      {'name': '성남도시개발공사',  'url': 'http://www.isdc.co.kr/'},
      {'name': '인천도시공사',      'url': 'http://www.imcd.co.kr/open_content/main/'},
      {'name': '하남도시공사',      'url': 'https://www.huic.co.kr/www/index.do'},
      {'name': '한국농어촌공사',    'url': 'https://www.ekr.or.kr/homepage/main.krc'},
      {'name': '한국도로공사',      'url': 'http://www.ex.co.kr/'},
      {'name': '화성도시공사',      'url': 'https://www.hsuco.or.kr/main.do'},
      {'name': '남양주도시공사',    'url': 'https://www.ncuc.or.kr/main/1'},
      {'name': '한국철도공사',      'url': 'http://info.korail.com/mbs/www/index.jsp'},
      {'name': '국가철도공단',      'url': 'http://www.kr.or.kr/boardCnts/list.do?boardID=51&m=040101&s=krhome'},
      {'name': '부산항만공사',      'url': 'https://www.busanpa.com/kor/Main.do'},
      {'name': '새만금개발공사',    'url': 'https://sdco.or.kr/portal/kor/main/main.do;jsessionid=0723735F1906689400944F2339653905'},
      {'name': '새만금개발청',      'url': 'https://www.saemangeum.go.kr/sda/brd/list.do?key=2009075579016'},
      {'name': '수원도시공사',      'url': 'https://www.suwonudc.co.kr/mainPage.do#'},
      {'name': '화성산업단지관리사업소',      'url': 'https://hsidc.hsuco.or.kr/lmth/05_news/notice.asp'},
      {'name': 'ALIO_공공기관 경영정보 공개시스템',  'url': 'http://www.alio.go.kr/informationBid.do'},
      {'name': '클린아이_지방공공기관통합공시',      'url': 'http://www.cleaneye.go.kr/index.jsp'},
    ]
  },
  {'name': '국토부', 'cityList':[
      {'name': '국토교통부',        'url': 'http://www.molit.go.kr/portal.do'},
      {'name': '서울지방국토관리청','url': 'http://www.molit.go.kr/srocm/intro.do'},
      {'name': '부산지방국토관리청','url': 'http://www.molit.go.kr/brocm/intro.do'},
      {'name': '대전지방국토관리청','url': 'http://www.molit.go.kr/drocm/intro.do'},
      {'name': '원주지방국토관리청','url': 'http://www.molit.go.kr/wrocm/intro.do'},
      {'name': '익산지방국토관리청','url': 'http://www.molit.go.kr/irocm/intro.do'},
    ]
  },
]
