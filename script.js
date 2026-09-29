let score=92, blocked=17;
const permissions={
 employee:["email","hr"],
 manager:["email","hr","reports"],
 admin:["email","hr","reports","admin"],
 attacker:[]
};
const roleNames={employee:"Employee",manager:"Manager",admin:"Administrator",attacker:"Unknown User"};

function log(msg){
 const box=document.getElementById("logs");
 const item=document.createElement("div");
 item.textContent=new Date().toLocaleTimeString()+" — "+msg;
 box.prepend(item);
}
function result(id,msg,ok){
 const el=document.getElementById(id);
 el.textContent=msg;
 el.className="result "+(ok?"success":"danger");
}
function verifyIdentity(){
 const user=document.getElementById("user").value;
 const password=document.getElementById("password").value;
 const mfa=document.getElementById("mfa").value;
 const ok=password==="valid" && mfa==="verified" && user!=="attacker";
 if(ok){result("identityResult","✓ Identity verified: password + MFA accepted.",true);log(roleNames[user]+" successfully passed identity verification.");}
 else{result("identityResult","✕ Access denied: identity verification failed.",false);blocked++;document.getElementById("blocked").textContent=blocked;log("Identity verification blocked a suspicious login.");}
}
function checkRBAC(){
 const user=document.getElementById("user").value;
 const resource=document.getElementById("resource").value;
 const ok=permissions[user].includes(resource);
 if(ok){result("rbacResult","✓ Authorized: "+roleNames[user]+" has permission for this resource.",true);log("RBAC allowed "+roleNames[user]+" → "+resource+".");}
 else{result("rbacResult","✕ Denied: least-privilege policy blocked this request.",false);blocked++;document.getElementById("blocked").textContent=blocked;log("RBAC blocked unauthorized resource access.");}
}
function checkDevice(){
 const device=document.getElementById("device").value;
 const encryption=document.getElementById("encryption").value;
 const ok=device==="managed" && encryption==="enabled";
 if(ok){result("deviceResult","✓ Device trusted: managed endpoint with encryption enabled.",true);log("Device posture check passed.");}
 else{result("deviceResult","✕ Device not trusted: secure posture requirements not met.",false);blocked++;document.getElementById("blocked").textContent=blocked;log("Device posture check blocked access.");}
}
function simulateSegmentation(){
 result("segmentResult","✓ Segmentation active: User Zone cannot directly access Database Zone.",true);
 log("Micro-segmentation test blocked direct lateral movement.");
}
function simulateThreat(type){
 let msg="";
 if(type==="external") msg="✕ External attack blocked by identity verification + MFA.";
 if(type==="insider") msg="✕ Insider attempt restricted by RBAC and least privilege.";
 if(type==="stolen") msg="✕ Stolen credentials rejected because MFA/device verification failed.";
 result("threatResult",msg,false);
 blocked++; document.getElementById("blocked").textContent=blocked;
 score=Math.max(80,score-1); document.getElementById("score").textContent=score+"%";
 log("Threat simulation: "+type+" — access blocked.");
}
document.getElementById("resetBtn").onclick=()=>{
 score=92;blocked=17;
 document.getElementById("score").textContent="92%";
 document.getElementById("blocked").textContent="17";
 ["identityResult","rbacResult","deviceResult","segmentResult","threatResult"].forEach(id=>{
   const e=document.getElementById(id); e.className="result neutral"; e.textContent="Waiting for simulation...";
 });
 document.getElementById("logs").innerHTML="<div>System reset — Zero Trust monitoring active.</div>";
};
