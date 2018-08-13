(function (window) {
    {
        var unknown = '-';
        // browser
        var nVer = navigator.appVersion;
        var agnt = navigator.userAgent;
        // system
        var os = unknown;
        var clientStrings = [
            {s:'Windows 10', r:/(Windows 10.0|Windows NT 10.0)/},
            {s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
            {s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
            {s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
            {s:'Windows Vista', r:/Windows NT 6.0/},
            {s:'Windows Server 2003', r:/Windows NT 5.2/},
            {s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
            {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
            {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
            {s:'Windows 98', r:/(Windows 98|Win98)/},
            {s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
            {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
            {s:'Windows CE', r:/Windows CE/},
            {s:'Windows 3.11', r:/Win16/},
            {s:'Android', r:/Android/},
            {s:'Open BSD', r:/OpenBSD/},
            {s:'Sun OS', r:/SunOS/},
            {s:'Linux', r:/(Linux|X11)/},
            {s:'iOS', r:/(iPhone|iPad|iPod)/},
            {s:'Mac OS X', r:/Mac OS X/},
            {s:'Mac OS', r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
            {s:'QNX', r:/QNX/},
            {s:'UNIX', r:/UNIX/},
            {s:'BeOS', r:/BeOS/},
            {s:'OS/2', r:/OS\/2/},
            {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
        ];
        for (var option in clientStrings) {
            var cs = clientStrings[option];
            if (cs.r.test(agnt)) {
                os = cs.s;
                break;
            }
        }

        var osVersion = unknown;

        if (/Windows/.test(os)) {
            osVersion = /Windows (.*)/.exec(os)[1];
            os = 'Windows';
        }

        switch (os) {
            case 'Mac OS X':
                osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
                break;

            case 'Android':
                osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
                break;

            case 'iOS':
                osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                break;
        }
    }

    window.jscd = {
        os: os,
        osVersion: osVersion,
    };
}(this));
OS = jscd.os +' '+ jscd.osVersion
  var a9 = RegExp("Android 9(.*)").test(OS);
  var a8 = RegExp("Android 8(.*)").test(OS);
  var a7 = RegExp("Android 7(.*)").test(OS);
  var a6 = RegExp("Android 6(.*)").test(OS);
  var a5 = RegExp("Android 5(.*)").test(OS);
  var a4 = RegExp("Android 4(.*)").test(OS);
  var a3 = RegExp("Android 3(.*)").test(OS);
  var a2 = RegExp("Android 2(.*)").test(OS);
  var a1 = RegExp("Android 1(.*)").test(OS);
  var i10 = RegExp("iOS 10.(.*)").test(OS);
  var i9 = RegExp("iOS 9.(.*)").test(OS);
  var i8 = RegExp("iOS 8.(.*)").test(OS);
  var i7 = RegExp("iOS 7.(.*)").test(OS);
  var i6 = RegExp("iOS 6.(.*)").test(OS);
  var i5 = RegExp("iOS 5.(.*)").test(OS);
  var i4 = RegExp("iOS 4.(.*)").test(OS);
  var i3 = RegExp("iOS 3.(.*)").test(OS);
  var i2 = RegExp("iOS 2.(.*)").test(OS);
  var i2 = RegExp("iOS 1.(.*)").test(OS);
  var OSX0 = RegExp("iOS 10.0.(.*)").test(OS);
  var OSX1 = RegExp("iOS 10.1.(.*)").test(OS);
  var OSX2 = RegExp("iOS 10.2.(.*)").test(OS);
  var OSX3 = RegExp("iOS 10.3.(.*)").test(OS);
  var OSX4 = RegExp("iOS 10.4.(.*)").test(OS);
  var OSX5 = RegExp("iOS 10.5.(.*)").test(OS);
  var OSX6 = RegExp("iOS 10.6.(.*)").test(OS);
  var OSX7 = RegExp("iOS 10.7.(.*)").test(OS);
  var OSX8 = RegExp("iOS 10.8.(.*)").test(OS);
  var OSX9 = RegExp("iOS 10.9.(.*)").test(OS);
  var OSX10 = RegExp("iOS 10.10.(.*)").test(OS);
  var OSX11 = RegExp("iOS 10.11.(.*)").test(OS);
  var OSX12 = RegExp("iOS 10.12.(.*)").test(OS);
  var OSX13 = RegExp("iOS 10.13.(.*)").test(OS);
  var OSX14 = RegExp("iOS 10.14.(.*)").test(OS);
  
 if (OS == "Windows 10" || OS == "Windows 8.1" || OS == "Windows 8"){
 
	document.getElementById("stylesheet").href = "css/windows8up.css";

}
else if (OS == "Windows 7" || OS == "Windows Vista"){
	document.getElementById("stylesheet").href = "css/windows7vista.css";
}
else if (OS == "Windows Server 2003"){
	document.getElementById("stylesheet").href = "css/windowsserver03.css";
}
else if (OS == "Windows XP"){
	document.getElementById("stylesheet").href = "css/windowsxp.css";
}
else if (OS == "Windows 2000" || OS == "Windows ME" || OS == "Windows 98" || OS == "Windows 95" || OS == "Windows NT 4.0" || OS == "Windows CE"){
	document.getElementById("stylesheet").href = "css/windowsclassic.css";
}
else if (OS == "Windows 3.11"){
	document.getElementById("stylesheet").href = "css/windows311.css";
}
else if (a9 == True){
	document.getElementById("stylesheet").href = "css/Android9.css";
}
else if (a8 == True){
	document.getElementById("stylesheet").href = "css/Android8.css";
}
else if (a7 == True){
	document.getElementById("stylesheet").href = "css/Android7.css";
}
else if (a6 == True){
	document.getElementById("stylesheet").href = "css/Android6.css";
}
else if (a5 == True){
	document.getElementById("stylesheet").href = "css/Android5.css";
}
else if (a4 == True){
	document.getElementById("stylesheet").href = "css/Android4.css";
}
else if (a3 == True){
	document.getElementById("stylesheet").href = "css/Android3.css";
}
else if (a2 == True){
	document.getElementById("stylesheet").href = "css/Android2.css";
}
else if (a1 == True){
	document.getElementById("stylesheet").href = "css/Android1.css";
}
else if (i10 == True){
	document.getElementById("stylesheet").href = "css/iOS10.css";
}
else if (i9 == True){
	document.getElementById("stylesheet").href = "css/iOS9.css";
}
else if (i8 == True){
	document.getElementById("stylesheet").href = "css/iOS8.css";
}
else if (i7 == True){
	document.getElementById("stylesheet").href = "css/iOS7.css";
}
else if (i6 == True){
	document.getElementById("stylesheet").href = "css/iOS6.css";
}
else if (i5 == True){
	document.getElementById("stylesheet").href = "css/iOS5.css";
}
else if (i4 == True){
	document.getElementById("stylesheet").href = "css/iOS4.css";
}
else if (i3 == True){
	document.getElementById("stylesheet").href = "css/iOS3.css";
}
else if (i2 == True){
	document.getElementById("stylesheet").href = "css/iOS2.css";
}
else if (i1 == True){
	document.getElementById("stylesheet").href = "css/iOS1.css";
}
else if (OSX0 == True){
	document.getElementById("stylesheet").href = "css/OSX0.css";
}
else if (OSX1 == True){
	document.getElementById("stylesheet").href = "css/OSX1.css";
}
else if (OSX2 == True){
	document.getElementById("stylesheet").href = "css/OSX2.css";
}
else if (OSX3 == True){
	document.getElementById("stylesheet").href = "css/OSX3.css";
}
else if (OSX4 == True){
	document.getElementById("stylesheet").href = "css/OSX4.css";
}
else if (OSX5 == True){
	document.getElementById("stylesheet").href = "css/OSX5.css";
}
else if (OSX6 == True){
	document.getElementById("stylesheet").href = "css/OSX6.css";
}
else if (OSX7 == True){
	document.getElementById("stylesheet").href = "css/OSX7.css";
}
else if (OSX8 == True){
	document.getElementById("stylesheet").href = "css/OSX8.css";
}
else if (OSX9 == True){
	document.getElementById("stylesheet").href = "css/OSX9.css";
}
else if (OSX10 == True){
	document.getElementById("stylesheet").href = "css/OSX10.css";
}
else if (OSX11 == True){
	document.getElementById("stylesheet").href = "css/OSX11.css";
}
else if (OSX12 == True){
	document.getElementById("stylesheet").href = "css/OSX12.css";
}
else if (OSX13 == True){
	document.getElementById("stylesheet").href = "css/OSX13.css";
}
else if (OSX14 == True){
	document.getElementById("stylesheet").href = "css/OSX14.css";
}