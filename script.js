        
                
        function copyFunction(str)
        {
            document.getElementById('cpy').setAttribute("title","copied");
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
                // alert("hello");
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


            