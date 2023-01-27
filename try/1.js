let index=0;
        const group=document.getElementsByClassName("cardgroup");

        const rightbtn=()=>  {
            const nextindex=index+1<=group.length-1?index+1:0;

            const currgroup=document.getElementsByClassName('[data-index="${index}"]')
            ,nxtgroup=document.getElementsByClassName('[data-index="${nextindex}"]');
           console.log(currgroup);
            console.log(nxtgroup);
            currgroup.datastatus="after";
            
            nxtgroup.datastatus="active";

            index=nextindex;
            
            
            
        }