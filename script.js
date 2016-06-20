
        function changeKeyword()
        {
            var str=document.getElementsByClassName("codetextarea");
             for (i=0;i<str.length;i++)
             {
                var s=str[i].innerHTML;
                var len=s.match( /"(.*?)"/g);

                for(var j=0;j<len.length;j++)
                { 
                    var s1=len[j];
                    var s2='<span style="color:#ff0080">'+len[j]+'</span>';
                    s=s.replace(s1,s2);
                }
                

                /*keyWords*/
                var search=[/abstract/g,/assert/g,/boolean/g,/break/g,/byte /g,/case/g,/catch/g,/char/g,/class/g,/const/g,/continue/g,/default/g,/double/g,/do/g,/else/g,/enum/g,/extends/g,/final/g,/finally/g,/float/g,/for/g,/goto/g,/if/g,/implements/g,/import/g,/instanceof/g,/int /g,/interface/g,/long/g,/native/g,/new/g,/package/g,/private/g,/protected/g,/public/g,/return/g,/short/g,/static/g,/strictfp/g,/super/g,/switch/g,/synchronized/g,/this/g,/throw/g,/throws/g,/transient/g,/try/g,/void/g,/volatile/g,/while/g];
                var keyword=['abstract','assert','boolean','break','byte ','case','catch','char','class','const','continue','default','double','do','else','enum','extends','final','finally','float','for','goto','if','implements','import','instanceof','int ','interface','long','native','new','package','private','protected','public','return','short','static','strictfp','super','switch','synchronized','this','throw','throws','transient','try','void','volatile','while'];

                for(var k=0;k<search.length;k++)
                    s=s.replace(search[k],'<span style="color:blue">'+keyword[k]+'</span>');

                rep=s;
                document.getElementsByClassName("codetextarea")[i].innerHTML=rep;
            }
        }

        function copyFunction(str)
        {
            var ta=document.getElementById('ta');
            ta.style="visibility:show; position:absolute; z-index:2;";
            ta.innerText = document.getElementById(str).innerText;
            ta.select();
            document.execCommand("Copy");
            ta.innerText="";
            ta.style="visibility:hidden; position:absolute; z-index:2;";
        }   

        function saveTextAsFile(filename,ext) {
                var textToWrite = document.getElementById(filename).innerText;
                var textFileAsBlob = new Blob([textToWrite], {
                    type: 'text/plain'
                });
                var fileNameToSaveAs = filename+'.'+ext;

                var downloadLink = document.createElement("a");
                downloadLink.download = fileNameToSaveAs;
                downloadLink.innerHTML = "Download File";
                if (window.webkitURL != null) {
                    // Chrome allows the link to be clicked
                    // without actually adding it to the DOM.
                    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
                } else {
                    // Firefox requires the link to be added to the DOM
                    // before it can be clicked.
                    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
                    downloadLink.onclick = destroyClickedElement;
                    downloadLink.style.display = "none";
                    document.body.appendChild(downloadLink);
                }
                downloadLink.click();
            }                               

            var button = document.getElementById('save');
            button.addEventListener('click', saveTextAsFile);

            function destroyClickedElement(event) {
                // remove the link from the DOM
                document.body.removeChild(event.target);
            }

            setInterval(function(){getPos()},1000);

        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();   
        });

        
        function getPos(){
            var element=document.getElementById('top-of-page');
            var viewportOffset = element.getBoundingClientRect();
            var top=viewportOffset.top;

            if(top < -100)
                document.getElementById("btn").className = "display-back-to-top-btn";

            else if(top==0)
                document.getElementById("btn").className = "back-to-top";

            else if(top <-5 || top > 5 )
                document.getElementById("btn").className = "back-to-top";

         }


            