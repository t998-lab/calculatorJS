    op="";
          function add(va) {
            
          if (va=='=') {
                document.getElementById("operation").innerHTML = "";
                document.getElementById("result").innerHTML = "Result = "+eval(op);
                op="";
            }
           else {
            op+=va;
            document.getElementById("operation").innerHTML+=va;
            document.getElementById("result").innerHTML = "";
           }
          }