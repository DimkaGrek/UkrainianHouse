import{q as D}from"./index-BKgOJsNp.js";var oe=e=>e.type==="checkbox",ie=e=>e instanceof Date,R=e=>e==null;const tt=e=>typeof e=="object";var C=e=>!R(e)&&!Array.isArray(e)&&tt(e)&&!ie(e),rt=e=>C(e)&&e.target?oe(e.target)?e.target.checked:e.target.value:e,xt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,st=(e,i)=>e.has(xt(i)),mt=e=>{const i=e.constructor&&e.constructor.prototype;return C(i)&&i.hasOwnProperty("isPrototypeOf")},Te=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function M(e){let i;const r=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(Te&&(e instanceof Blob||e instanceof FileList))&&(r||C(e)))if(i=r?[]:{},!r&&!mt(e))i=e;else for(const s in e)e.hasOwnProperty(s)&&(i[s]=M(e[s]));else return e;return i}var fe=e=>Array.isArray(e)?e.filter(Boolean):[],S=e=>e===void 0,d=(e,i,r)=>{if(!i||!C(e))return r;const s=fe(i.split(/[,[\].]+?/)).reduce((n,a)=>R(n)?n:n[a],e);return S(s)||s===e?S(e[i])?r:e[i]:s},N=e=>typeof e=="boolean";const ve={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},I={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},J={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Dt=D.createContext(null),Oe=()=>D.useContext(Dt);var it=(e,i,r,s=!0)=>{const n={defaultValues:i._defaultValues};for(const a in e)Object.defineProperty(n,a,{get:()=>{const f=a;return i._proxyFormState[f]!==I.all&&(i._proxyFormState[f]=!s||I.all),r&&(r[f]=!0),e[f]}});return n},P=e=>C(e)&&!Object.keys(e).length,ut=(e,i,r,s)=>{r(e);const{name:n,...a}=e;return P(a)||Object.keys(a).length>=Object.keys(i).length||Object.keys(a).find(f=>i[f]===(!s||I.all))},he=e=>Array.isArray(e)?e:[e],nt=(e,i,r)=>!e||!i||e===i||he(e).some(s=>s&&(r?s===i:s.startsWith(i)||i.startsWith(s)));function Ue(e){const i=D.useRef(e);i.current=e,D.useEffect(()=>{const r=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}function wt(e){const i=Oe(),{control:r=i.control,disabled:s,name:n,exact:a}=e||{},[f,_]=D.useState(r._formState),g=D.useRef(!0),k=D.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),w=D.useRef(n);return w.current=n,Ue({disabled:s,next:A=>g.current&&nt(w.current,A.name,a)&&ut(A,k.current,r._updateFormState)&&_({...r._formState,...A}),subject:r._subjects.state}),D.useEffect(()=>(g.current=!0,k.current.isValid&&r._updateValid(!0),()=>{g.current=!1}),[r]),it(f,r,k.current,!1)}var $=e=>typeof e=="string",lt=(e,i,r,s,n)=>$(e)?(s&&i.watch.add(e),d(r,e,n)):Array.isArray(e)?e.map(a=>(s&&i.watch.add(a),d(r,a))):(s&&(i.watchAll=!0),r);function St(e){const i=Oe(),{control:r=i.control,name:s,defaultValue:n,disabled:a,exact:f}=e||{},_=D.useRef(s);_.current=s,Ue({disabled:a,subject:r._subjects.values,next:w=>{nt(_.current,w.name,f)&&k(M(lt(_.current,r._names,w.values||r._formValues,!1,n)))}});const[g,k]=D.useState(r._getWatch(s,n));return D.useEffect(()=>r._removeUnmounted()),g}var Re=e=>/^\w*$/.test(e),at=e=>fe(e.replace(/["|']|\]/g,"").split(/\.|\[/)),m=(e,i,r)=>{let s=-1;const n=Re(i)?[i]:at(i),a=n.length,f=a-1;for(;++s<a;){const _=n[s];let g=r;if(s!==f){const k=e[_];g=C(k)||Array.isArray(k)?k:isNaN(+n[s+1])?{}:[]}e[_]=g,e=e[_]}return e};function kt(e){const i=Oe(),{name:r,disabled:s,control:n=i.control,shouldUnregister:a}=e,f=st(n._names.array,r),_=St({control:n,name:r,defaultValue:d(n._formValues,r,d(n._defaultValues,r,e.defaultValue)),exact:!0}),g=wt({control:n,name:r}),k=D.useRef(n.register(r,{...e.rules,value:_,...N(e.disabled)?{disabled:e.disabled}:{}}));return D.useEffect(()=>{const w=n._options.shouldUnregister||a,A=(v,q)=>{const U=d(n._fields,v);U&&(U._f.mount=q)};if(A(r,!0),w){const v=M(d(n._options.defaultValues,r));m(n._defaultValues,r,v),S(d(n._formValues,r))&&m(n._formValues,r,v)}return()=>{(f?w&&!n._state.action:w)?n.unregister(r):A(r,!1)}},[r,n,f,a]),D.useEffect(()=>{d(n._fields,r)&&n._updateDisabledField({disabled:s,fields:n._fields,name:r,value:d(n._fields,r)._f.value})},[s,r,n]),{field:{name:r,value:_,...N(s)||g.disabled?{disabled:g.disabled||s}:{},onChange:D.useCallback(w=>k.current.onChange({target:{value:rt(w),name:r},type:ve.CHANGE}),[r]),onBlur:D.useCallback(()=>k.current.onBlur({target:{value:d(n._formValues,r),name:r},type:ve.BLUR}),[r,n]),ref:w=>{const A=d(n._fields,r);A&&w&&(A._f.ref={focus:()=>w.focus(),select:()=>w.select(),setCustomValidity:v=>w.setCustomValidity(v),reportValidity:()=>w.reportValidity()})}},formState:g,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!d(g.errors,r)},isDirty:{enumerable:!0,get:()=>!!d(g.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!d(g.touchedFields,r)},error:{enumerable:!0,get:()=>d(g.errors,r)}})}}const Ht=e=>e.render(kt(e));var Et=(e,i,r,s,n)=>i?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:n||!0}}:{},Ge=e=>({isOnSubmit:!e||e===I.onSubmit,isOnBlur:e===I.onBlur,isOnChange:e===I.onChange,isOnAll:e===I.all,isOnTouch:e===I.onTouched}),ze=(e,i,r)=>!r&&(i.watchAll||i.watch.has(e)||[...i.watch].some(s=>e.startsWith(s)&&/^\.\w+/.test(e.slice(s.length))));const ae=(e,i,r,s)=>{for(const n of r||Object.keys(e)){const a=d(e,n);if(a){const{_f:f,..._}=a;if(f){if(f.refs&&f.refs[0]&&i(f.refs[0],n)&&!s)break;if(f.ref&&i(f.ref,f.name)&&!s)break;ae(_,i)}else C(_)&&ae(_,i)}}};var Ct=(e,i,r)=>{const s=fe(d(e,r));return m(s,"root",i[r]),m(e,r,s),e},pe=e=>e.type==="file",X=e=>typeof e=="function",_e=e=>{if(!Te)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},ge=e=>$(e),Me=e=>e.type==="radio",be=e=>e instanceof RegExp;const Je={value:!1,isValid:!1},Qe={value:!0,isValid:!0};var ot=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!S(e[0].attributes.value)?S(e[0].value)||e[0].value===""?Qe:{value:e[0].value,isValid:!0}:Qe:Je}return Je};const Xe={isValid:!1,value:null};var ft=e=>Array.isArray(e)?e.reduce((i,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:i,Xe):Xe;function Ye(e,i,r="validate"){if(ge(e)||Array.isArray(e)&&e.every(ge)||N(e)&&!e)return{type:r,message:ge(e)?e:"",ref:i}}var se=e=>C(e)&&!be(e)?e:{value:e,message:""},Ze=async(e,i,r,s,n)=>{const{ref:a,refs:f,required:_,maxLength:g,minLength:k,min:w,max:A,pattern:v,validate:q,name:U,valueAsNumber:ce,mount:Ae,disabled:Q}=e._f,V=d(i,U);if(!Ae||Q)return{};const K=f?f[0]:a,G=F=>{s&&K.reportValidity&&(K.setCustomValidity(N(F)?"":F||""),K.reportValidity())},L={},ue=Me(a),te=oe(a),xe=ue||te,W=(ce||pe(a))&&S(a.value)&&S(V)||_e(a)&&a.value===""||V===""||Array.isArray(V)&&!V.length,Y=Et.bind(null,U,r,L),z=(F,b,E,p=J.maxLength,B=J.minLength)=>{const H=F?b:E;L[U]={type:F?p:B,message:H,ref:a,...Y(F?p:B,H)}};if(n?!Array.isArray(V)||!V.length:_&&(!xe&&(W||R(V))||N(V)&&!V||te&&!ot(f).isValid||ue&&!ft(f).isValid)){const{value:F,message:b}=ge(_)?{value:!!_,message:_}:se(_);if(F&&(L[U]={type:J.required,message:b,ref:K,...Y(J.required,b)},!r))return G(b),L}if(!W&&(!R(w)||!R(A))){let F,b;const E=se(A),p=se(w);if(!R(V)&&!isNaN(V)){const B=a.valueAsNumber||V&&+V;R(E.value)||(F=B>E.value),R(p.value)||(b=B<p.value)}else{const B=a.valueAsDate||new Date(V),H=de=>new Date(new Date().toDateString()+" "+de),Z=a.type=="time",ne=a.type=="week";$(E.value)&&V&&(F=Z?H(V)>H(E.value):ne?V>E.value:B>new Date(E.value)),$(p.value)&&V&&(b=Z?H(V)<H(p.value):ne?V<p.value:B<new Date(p.value))}if((F||b)&&(z(!!F,E.message,p.message,J.max,J.min),!r))return G(L[U].message),L}if((g||k)&&!W&&($(V)||n&&Array.isArray(V))){const F=se(g),b=se(k),E=!R(F.value)&&V.length>+F.value,p=!R(b.value)&&V.length<+b.value;if((E||p)&&(z(E,F.message,b.message),!r))return G(L[U].message),L}if(v&&!W&&$(V)){const{value:F,message:b}=se(v);if(be(F)&&!V.match(F)&&(L[U]={type:J.pattern,message:b,ref:a,...Y(J.pattern,b)},!r))return G(b),L}if(q){if(X(q)){const F=await q(V,i),b=Ye(F,K);if(b&&(L[U]={...b,...Y(J.validate,b.message)},!r))return G(b.message),L}else if(C(q)){let F={};for(const b in q){if(!P(F)&&!r)break;const E=Ye(await q[b](V,i),K,b);E&&(F={...E,...Y(b,E.message)},G(E.message),r&&(L[U]=F))}if(!P(F)&&(L[U]={ref:K,...F},!r))return L}}return G(!0),L};function Lt(e,i){const r=i.slice(0,-1).length;let s=0;for(;s<r;)e=S(e)?s++:e[i[s++]];return e}function Tt(e){for(const i in e)if(e.hasOwnProperty(i)&&!S(e[i]))return!1;return!0}function O(e,i){const r=Array.isArray(i)?i:Re(i)?[i]:at(i),s=r.length===1?e:Lt(e,r),n=r.length-1,a=r[n];return s&&delete s[a],n!==0&&(C(s)&&P(s)||Array.isArray(s)&&Tt(s))&&O(e,r.slice(0,-1)),e}var Ee=()=>{let e=[];return{get observers(){return e},next:n=>{for(const a of e)a.next&&a.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(a=>a!==n)}}),unsubscribe:()=>{e=[]}}},Ve=e=>R(e)||!tt(e);function ee(e,i){if(Ve(e)||Ve(i))return e===i;if(ie(e)&&ie(i))return e.getTime()===i.getTime();const r=Object.keys(e),s=Object.keys(i);if(r.length!==s.length)return!1;for(const n of r){const a=e[n];if(!s.includes(n))return!1;if(n!=="ref"){const f=i[n];if(ie(a)&&ie(f)||C(a)&&C(f)||Array.isArray(a)&&Array.isArray(f)?!ee(a,f):a!==f)return!1}}return!0}var ct=e=>e.type==="select-multiple",Ot=e=>Me(e)||oe(e),Ce=e=>_e(e)&&e.isConnected,dt=e=>{for(const i in e)if(X(e[i]))return!0;return!1};function Fe(e,i={}){const r=Array.isArray(e);if(C(e)||r)for(const s in e)Array.isArray(e[s])||C(e[s])&&!dt(e[s])?(i[s]=Array.isArray(e[s])?[]:{},Fe(e[s],i[s])):R(e[s])||(i[s]=!0);return i}function yt(e,i,r){const s=Array.isArray(e);if(C(e)||s)for(const n in e)Array.isArray(e[n])||C(e[n])&&!dt(e[n])?S(i)||Ve(r[n])?r[n]=Array.isArray(e[n])?Fe(e[n],[]):{...Fe(e[n])}:yt(e[n],R(i)?{}:i[n],r[n]):r[n]=!ee(e[n],i[n]);return r}var ye=(e,i)=>yt(e,i,Fe(i)),ht=(e,{valueAsNumber:i,valueAsDate:r,setValueAs:s})=>S(e)?e:i?e===""?NaN:e&&+e:r&&$(e)?new Date(e):s?s(e):e;function Le(e){const i=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):i.disabled))return pe(i)?i.files:Me(i)?ft(e.refs).value:ct(i)?[...i.selectedOptions].map(({value:r})=>r):oe(i)?ot(e.refs).value:ht(S(i.value)?e.ref.value:i.value,e)}var Ut=(e,i,r,s)=>{const n={};for(const a of e){const f=d(i,a);f&&m(n,a,f._f)}return{criteriaMode:r,names:[...e],fields:n,shouldUseNativeValidation:s}},le=e=>S(e)?e:be(e)?e.source:C(e)?be(e.value)?e.value.source:e.value:e,Rt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function et(e,i,r){const s=d(e,r);if(s||Re(r))return{error:s,name:r};const n=r.split(".");for(;n.length;){const a=n.join("."),f=d(i,a),_=d(e,a);if(f&&!Array.isArray(f)&&r!==a)return{name:r};if(_&&_.type)return{name:a,error:_};n.pop()}return{name:r}}var pt=(e,i,r,s,n)=>n.isOnAll?!1:!r&&n.isOnTouch?!(i||e):(r?s.isOnBlur:n.isOnBlur)?!e:(r?s.isOnChange:n.isOnChange)?e:!0,Mt=(e,i)=>!fe(d(e,i)).length&&O(e,i);const Bt={mode:I.onSubmit,reValidateMode:I.onChange,shouldFocusError:!0};function Pt(e={},i){let r={...Bt,...e},s={submitCount:0,isDirty:!1,isLoading:X(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:r.errors||{},disabled:r.disabled||!1},n={},a=C(r.values)||C(r.defaultValues)?M(r.values||r.defaultValues)||{}:{},f=r.shouldUnregister?{}:M(a),_={action:!1,mount:!1,watch:!1},g={mount:new Set,unMount:new Set,array:new Set,watch:new Set},k,w=0;const A={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:Ee(),array:Ee(),state:Ee()},q=Ge(r.mode),U=Ge(r.reValidateMode),ce=r.criteriaMode===I.all,Ae=t=>u=>{clearTimeout(w),w=setTimeout(t,u)},Q=async t=>{if(A.isValid||t){const u=r.resolver?P((await W()).errors):await z(n,!0);u!==s.isValid&&v.state.next({isValid:u})}},V=t=>A.isValidating&&v.state.next({isValidating:t}),K=(t,u=[],l,y,c=!0,o=!0)=>{if(y&&l){if(_.action=!0,o&&Array.isArray(d(n,t))){const h=l(d(n,t),y.argA,y.argB);c&&m(n,t,h)}if(o&&Array.isArray(d(s.errors,t))){const h=l(d(s.errors,t),y.argA,y.argB);c&&m(s.errors,t,h),Mt(s.errors,t)}if(A.touchedFields&&o&&Array.isArray(d(s.touchedFields,t))){const h=l(d(s.touchedFields,t),y.argA,y.argB);c&&m(s.touchedFields,t,h)}A.dirtyFields&&(s.dirtyFields=ye(a,f)),v.state.next({name:t,isDirty:b(t,u),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})}else m(f,t,u)},G=(t,u)=>{m(s.errors,t,u),v.state.next({errors:s.errors})},L=t=>{s.errors=t,v.state.next({errors:s.errors,isValid:!1})},ue=(t,u,l,y)=>{const c=d(n,t);if(c){const o=d(f,t,S(l)?d(a,t):l);S(o)||y&&y.defaultChecked||u?m(f,t,u?o:Le(c._f)):B(t,o),_.mount&&Q()}},te=(t,u,l,y,c)=>{let o=!1,h=!1;const x={name:t},T=!!(d(n,t)&&d(n,t)._f.disabled);if(!l||y){A.isDirty&&(h=s.isDirty,s.isDirty=x.isDirty=b(),o=h!==x.isDirty);const j=T||ee(d(a,t),u);h=!!(!T&&d(s.dirtyFields,t)),j||T?O(s.dirtyFields,t):m(s.dirtyFields,t,!0),x.dirtyFields=s.dirtyFields,o=o||A.dirtyFields&&h!==!j}if(l){const j=d(s.touchedFields,t);j||(m(s.touchedFields,t,l),x.touchedFields=s.touchedFields,o=o||A.touchedFields&&j!==l)}return o&&c&&v.state.next(x),o?x:{}},xe=(t,u,l,y)=>{const c=d(s.errors,t),o=A.isValid&&N(u)&&s.isValid!==u;if(e.delayError&&l?(k=Ae(()=>G(t,l)),k(e.delayError)):(clearTimeout(w),k=null,l?m(s.errors,t,l):O(s.errors,t)),(l?!ee(c,l):c)||!P(y)||o){const h={...y,...o&&N(u)?{isValid:u}:{},errors:s.errors,name:t};s={...s,...h},v.state.next(h)}V(!1)},W=async t=>r.resolver(f,r.context,Ut(t||g.mount,n,r.criteriaMode,r.shouldUseNativeValidation)),Y=async t=>{const{errors:u}=await W(t);if(t)for(const l of t){const y=d(u,l);y?m(s.errors,l,y):O(s.errors,l)}else s.errors=u;return u},z=async(t,u,l={valid:!0})=>{for(const y in t){const c=t[y];if(c){const{_f:o,...h}=c;if(o){const x=g.array.has(o.name),T=await Ze(c,f,ce,r.shouldUseNativeValidation&&!u,x);if(T[o.name]&&(l.valid=!1,u))break;!u&&(d(T,o.name)?x?Ct(s.errors,T,o.name):m(s.errors,o.name,T[o.name]):O(s.errors,o.name))}h&&await z(h,u,l)}}return l.valid},F=()=>{for(const t of g.unMount){const u=d(n,t);u&&(u._f.refs?u._f.refs.every(l=>!Ce(l)):!Ce(u._f.ref))&&De(t)}g.unMount=new Set},b=(t,u)=>(t&&u&&m(f,t,u),!ee(Be(),a)),E=(t,u,l)=>lt(t,g,{..._.mount?f:S(u)?a:$(t)?{[t]:u}:u},l,u),p=t=>fe(d(_.mount?f:a,t,e.shouldUnregister?d(a,t,[]):[])),B=(t,u,l={})=>{const y=d(n,t);let c=u;if(y){const o=y._f;o&&(!o.disabled&&m(f,t,ht(u,o)),c=_e(o.ref)&&R(u)?"":u,ct(o.ref)?[...o.ref.options].forEach(h=>h.selected=c.includes(h.value)):o.refs?oe(o.ref)?o.refs.length>1?o.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(c)?!!c.find(x=>x===h.value):c===h.value)):o.refs[0]&&(o.refs[0].checked=!!c):o.refs.forEach(h=>h.checked=h.value===c):pe(o.ref)?o.ref.value="":(o.ref.value=c,o.ref.type||v.values.next({name:t,values:{...f}})))}(l.shouldDirty||l.shouldTouch)&&te(t,c,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&me(t)},H=(t,u,l)=>{for(const y in u){const c=u[y],o=`${t}.${y}`,h=d(n,o);(g.array.has(t)||!Ve(c)||h&&!h._f)&&!ie(c)?H(o,c,l):B(o,c,l)}},Z=(t,u,l={})=>{const y=d(n,t),c=g.array.has(t),o=M(u);m(f,t,o),c?(v.array.next({name:t,values:{...f}}),(A.isDirty||A.dirtyFields)&&l.shouldDirty&&v.state.next({name:t,dirtyFields:ye(a,f),isDirty:b(t,o)})):y&&!y._f&&!R(o)?H(t,o,l):B(t,o,l),ze(t,g)&&v.state.next({...s}),v.values.next({name:t,values:{...f}}),!_.mount&&i()},ne=async t=>{const u=t.target;let l=u.name,y=!0;const c=d(n,l),o=()=>u.type?Le(c._f):rt(t),h=x=>{y=Number.isNaN(x)||x===d(f,l,x)};if(c){let x,T;const j=o(),re=t.type===ve.BLUR||t.type===ve.FOCUS_OUT,Vt=!Rt(c._f)&&!r.resolver&&!d(s.errors,l)&&!c._f.deps||pt(re,d(s.touchedFields,l),s.isSubmitted,U,q),Se=ze(l,g,re);m(f,l,j),re?(c._f.onBlur&&c._f.onBlur(t),k&&k(0)):c._f.onChange&&c._f.onChange(t);const ke=te(l,j,re,!1),Ft=!P(ke)||Se;if(!re&&v.values.next({name:l,type:t.type,values:{...f}}),Vt)return A.isValid&&Q(),Ft&&v.state.next({name:l,...Se?{}:ke});if(!re&&Se&&v.state.next({...s}),V(!0),r.resolver){const{errors:$e}=await W([l]);if(h(j),y){const At=et(s.errors,n,l),Ke=et($e,n,At.name||l);x=Ke.error,l=Ke.name,T=P($e)}}else x=(await Ze(c,f,ce,r.shouldUseNativeValidation))[l],h(j),y&&(x?T=!1:A.isValid&&(T=await z(n,!0)));y&&(c._f.deps&&me(c._f.deps),xe(l,T,x,ke))}},de=(t,u)=>{if(d(s.errors,u)&&t.focus)return t.focus(),1},me=async(t,u={})=>{let l,y;const c=he(t);if(V(!0),r.resolver){const o=await Y(S(t)?t:c);l=P(o),y=t?!c.some(h=>d(o,h)):l}else t?(y=(await Promise.all(c.map(async o=>{const h=d(n,o);return await z(h&&h._f?{[o]:h}:h)}))).every(Boolean),!(!y&&!s.isValid)&&Q()):y=l=await z(n);return v.state.next({...!$(t)||A.isValid&&l!==s.isValid?{}:{name:t},...r.resolver||!t?{isValid:l}:{},errors:s.errors,isValidating:!1}),u.shouldFocus&&!y&&ae(n,de,t?c:g.mount),y},Be=t=>{const u={...a,..._.mount?f:{}};return S(t)?u:$(t)?d(u,t):t.map(l=>d(u,l))},Pe=(t,u)=>({invalid:!!d((u||s).errors,t),isDirty:!!d((u||s).dirtyFields,t),isTouched:!!d((u||s).touchedFields,t),error:d((u||s).errors,t)}),gt=t=>{t&&he(t).forEach(u=>O(s.errors,u)),v.state.next({errors:t?s.errors:{}})},Ne=(t,u,l)=>{const y=(d(n,t,{_f:{}})._f||{}).ref;m(s.errors,t,{...u,ref:y}),v.state.next({name:t,errors:s.errors,isValid:!1}),l&&l.shouldFocus&&y&&y.focus&&y.focus()},vt=(t,u)=>X(t)?v.values.subscribe({next:l=>t(E(void 0,u),l)}):E(t,u,!0),De=(t,u={})=>{for(const l of t?he(t):g.mount)g.mount.delete(l),g.array.delete(l),u.keepValue||(O(n,l),O(f,l)),!u.keepError&&O(s.errors,l),!u.keepDirty&&O(s.dirtyFields,l),!u.keepTouched&&O(s.touchedFields,l),!r.shouldUnregister&&!u.keepDefaultValue&&O(a,l);v.values.next({values:{...f}}),v.state.next({...s,...u.keepDirty?{isDirty:b()}:{}}),!u.keepIsValid&&Q()},Ie=({disabled:t,name:u,field:l,fields:y,value:c})=>{if(N(t)){const o=t?void 0:S(c)?Le(l?l._f:d(y,u)._f):c;m(f,u,o),te(u,o,!1,!1,!0)}},we=(t,u={})=>{let l=d(n,t);const y=N(u.disabled);return m(n,t,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:t}},name:t,mount:!0,...u}}),g.mount.add(t),l?Ie({field:l,disabled:u.disabled,name:t,value:u.value}):ue(t,!0,u.value),{...y?{disabled:u.disabled}:{},...r.progressive?{required:!!u.required,min:le(u.min),max:le(u.max),minLength:le(u.minLength),maxLength:le(u.maxLength),pattern:le(u.pattern)}:{},name:t,onChange:ne,onBlur:ne,ref:c=>{if(c){we(t,u),l=d(n,t);const o=S(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,h=Ot(o),x=l._f.refs||[];if(h?x.find(T=>T===o):o===l._f.ref)return;m(n,t,{_f:{...l._f,...h?{refs:[...x.filter(Ce),o,...Array.isArray(d(a,t))?[{}]:[]],ref:{type:o.type,name:t}}:{ref:o}}}),ue(t,!1,void 0,o)}else l=d(n,t,{}),l._f&&(l._f.mount=!1),(r.shouldUnregister||u.shouldUnregister)&&!(st(g.array,t)&&_.action)&&g.unMount.add(t)}}},qe=()=>r.shouldFocusError&&ae(n,de,g.mount),_t=t=>{N(t)&&(v.state.next({disabled:t}),ae(n,(u,l)=>{let y=t;const c=d(n,l);c&&N(c._f.disabled)&&(y||(y=c._f.disabled)),u.disabled=y},0,!1))},We=(t,u)=>async l=>{let y;l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let c=M(f);if(v.state.next({isSubmitting:!0}),r.resolver){const{errors:o,values:h}=await W();s.errors=o,c=h}else await z(n);if(O(s.errors,"root"),P(s.errors)){v.state.next({errors:{}});try{await t(c,l)}catch(o){y=o}}else u&&await u({...s.errors},l),qe(),setTimeout(qe);if(v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:P(s.errors)&&!y,submitCount:s.submitCount+1,errors:s.errors}),y)throw y},bt=(t,u={})=>{d(n,t)&&(S(u.defaultValue)?Z(t,M(d(a,t))):(Z(t,u.defaultValue),m(a,t,M(u.defaultValue))),u.keepTouched||O(s.touchedFields,t),u.keepDirty||(O(s.dirtyFields,t),s.isDirty=u.defaultValue?b(t,M(d(a,t))):b()),u.keepError||(O(s.errors,t),A.isValid&&Q()),v.state.next({...s}))},He=(t,u={})=>{const l=t?M(t):a,y=M(l),c=t&&!P(t)?y:a;if(u.keepDefaultValues||(a=l),!u.keepValues){if(u.keepDirtyValues)for(const o of g.mount)d(s.dirtyFields,o)?m(c,o,d(f,o)):Z(o,d(c,o));else{if(Te&&S(t))for(const o of g.mount){const h=d(n,o);if(h&&h._f){const x=Array.isArray(h._f.refs)?h._f.refs[0]:h._f.ref;if(_e(x)){const T=x.closest("form");if(T){T.reset();break}}}}n={}}f=e.shouldUnregister?u.keepDefaultValues?M(a):{}:M(c),v.array.next({values:{...c}}),v.values.next({values:{...c}})}g={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!_.mount&&i(),_.mount=!A.isValid||!!u.keepIsValid||!!u.keepDirtyValues,_.watch=!!e.shouldUnregister,v.state.next({submitCount:u.keepSubmitCount?s.submitCount:0,isDirty:u.keepDirty?s.isDirty:!!(u.keepDefaultValues&&!ee(t,a)),isSubmitted:u.keepIsSubmitted?s.isSubmitted:!1,dirtyFields:u.keepDirtyValues?u.keepDefaultValues&&f?ye(a,f):s.dirtyFields:u.keepDefaultValues&&t?ye(a,t):{},touchedFields:u.keepTouched?s.touchedFields:{},errors:u.keepErrors?s.errors:{},isSubmitSuccessful:u.keepIsSubmitSuccessful?s.isSubmitSuccessful:!1,isSubmitting:!1})},je=(t,u)=>He(X(t)?t(f):t,u);return{control:{register:we,unregister:De,getFieldState:Pe,handleSubmit:We,setError:Ne,_executeSchema:W,_getWatch:E,_getDirty:b,_updateValid:Q,_removeUnmounted:F,_updateFieldArray:K,_updateDisabledField:Ie,_getFieldArray:p,_reset:He,_resetDefaultValues:()=>X(r.defaultValues)&&r.defaultValues().then(t=>{je(t,r.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:t=>{s={...s,...t}},_disableForm:_t,_subjects:v,_proxyFormState:A,_setErrors:L,get _fields(){return n},get _formValues(){return f},get _state(){return _},set _state(t){_=t},get _defaultValues(){return a},get _names(){return g},set _names(t){g=t},get _formState(){return s},set _formState(t){s=t},get _options(){return r},set _options(t){r={...r,...t}}},trigger:me,register:we,handleSubmit:We,watch:vt,setValue:Z,getValues:Be,reset:je,resetField:bt,clearErrors:gt,unregister:De,setError:Ne,setFocus:(t,u={})=>{const l=d(n,t),y=l&&l._f;if(y){const c=y.refs?y.refs[0]:y.ref;c.focus&&(c.focus(),u.shouldSelect&&c.select())}},getFieldState:Pe}}function jt(e={}){const i=D.useRef(),r=D.useRef(),[s,n]=D.useState({isDirty:!1,isValidating:!1,isLoading:X(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:X(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...Pt(e,()=>n(f=>({...f}))),formState:s});const a=i.current.control;return a._options=e,Ue({subject:a._subjects.state,next:f=>{ut(f,a._proxyFormState,a._updateFormState,!0)&&n({...a._formState})}}),D.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),D.useEffect(()=>{if(a._proxyFormState.isDirty){const f=a._getDirty();f!==s.isDirty&&a._subjects.state.next({isDirty:f})}},[a,s.isDirty]),D.useEffect(()=>{e.values&&!ee(e.values,r.current)?(a._reset(e.values,a._options.resetOptions),r.current=e.values,n(f=>({...f}))):a._resetDefaultValues()},[e.values,a]),D.useEffect(()=>{e.errors&&a._setErrors(e.errors)},[e.errors,a]),D.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),D.useEffect(()=>{e.shouldUnregister&&a._subjects.values.next({values:a._getWatch()})},[e.shouldUnregister,a]),i.current.formState=it(s,a),i.current}export{Ht as C,Et as a,d as g,jt as u};