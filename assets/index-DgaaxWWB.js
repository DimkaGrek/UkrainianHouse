import{j as e,N as n,r as i,O as R,R as C,a,c as M,H as G}from"./vendor-CKhSRc_D.js";(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))g(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&g(r)}).observe(document,{childList:!0,subtree:!0});function x(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function g(s){if(s.ep)return;s.ep=!0;const t=x(s);fetch(s.href,t)}})();const J="modulepreload",Q=function(j){return"/UkrainianHouse/"+j},w={},o=function(A,x,g){let s=Promise.resolve();if(x&&x.length>0){const t=document.getElementsByTagName("link");s=Promise.all(x.map(r=>{if(r=Q(r),r in w)return;w[r]=!0;const d=r.endsWith(".css"),N=d?'[rel="stylesheet"]':"";if(!!g)for(let m=t.length-1;m>=0;m--){const h=t[m];if(h.href===r&&(!d||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${N}`))return;const l=document.createElement("link");if(l.rel=d?"stylesheet":J,d||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),d)return new Promise((m,h)=>{l.addEventListener("load",m),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})}))}return s.then(()=>A()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})},b="/UkrainianHouse/assets/logo_desktop1x-BnvO_aJc.png",U="/UkrainianHouse/assets/logo_desktop2x-mK2aflVp.png",c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAhCAYAAACSllj+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA0aSURBVHgBzZl5dFX1tcc/5w65uUlubuaEDCSQgYwQQcCwKIPCKkW0Pp/oslqrrV31FaX6XLqW9tl2vUF57fNVtMp7LmxrVbQIVupCWhBRRGYkZCIhIfPNdDPf3HnqPidAoCStzR+lO+sm9wy/c37fPX73jhIWQaR72MmQMwDakUJYCWMy6pmVFIVep2MyCclP95CLEXdwfF1Y0c6bTTAzKRq9oudaiUH9VWcbYPWmEwLOe8VFvaLw3F0FPH5zgUC9GtyxxiG+/vwx+p3+K85HCJ4X7inie6vzZZ3CtRBtt4cahuka9ovSlSs+AbHCjuM9hMKTLz5YPyigglet8wYV9tUOcC1FAxacbOdhNF2H1GtTAAuEglNdkmtTXfn7iGGyk4lmF+Up7axJrmfIUi4Il/2FR6jwJwMRvkZOOC5XATNKQthU8j53FB+gvzVISul5lPBDsv+/NREojLi8nGgapKIwmZbeMfokhotnWjhncxAdZWRkzI8nEGR5cSrREQZ6hpyctY2woiSVI42DZCaYcPnDFMywcKTeTkqsSdw8TElWHHWdo/gDfublJPBF8wBl2Qk43H4JKQ9lmXGXZYQLGS0YNvDuyCJGRmM48JGBw3sMME3d2x0u7vv/M9gk49778ik27T7Pax+3cPcrVbLxAW7935N875e1PPyrM6jJ+fXPO1j13ydpso/yzS2V/N/+JhY8fYjmvlGe2tHAqwdaeOzNOgmPIBt+Wcm9W6pw+4Osf7GSZ35bzWcNfTy3q1F7t+6CcokwhCiOt/ONvJMEFSO/NxQwtHABraU3ThNXGEtkhJZOTHqD5qz+YJDNe1tZU2bla+VpmAxh7qpI42y3QxJUkJ1HbFyXY+HT2mG5NyRgFTxSSZ5+u44xj19ywXiO7Rv10jbgxj7qornXgaJT2PKxjar2MVkTmgCmyMF38w+yb91/sPWG13g+cRvNtpm8VVPOJz0F04wWASR5PyBggmqplLqokw3odUYB4mJYaqbLF2bLRx08viabtn4n53q9RBoUdp/ukVqoE2Xr+cYNiWKJERp7vOj1YVkPe870anvS6Qx8VNMvigty6/wknv+wFV8gPAGsIqOVR8t20XNqmI4aH2bLMDu+WEpq/AhrSz9X9zQNUYg2GfD6Qmz8dTXp1kixkIEnb5mFxxtk6/5mOVb454Up/P5UD/tr+1iYZ+HGkiT2V9nlGmKlABap9j+5Ix+nrImKNDLq8fHh6V5uuS6FtfOSBOQAXimjT6zLxShoPP5xi2nJo9Dajq19iNdfDnL3/WZ+MXoHXR4rObEGKjuyuFfRTQcZBtHo3h8u0RLB2vlpVLcOkp1s4aaSRI6cG2BOejS3Xp/OO5/biI828Iv7y8hLjRYlGMU6yPVYsUBI7k8nQrQ7b1YcmVa9WE3PnRWzcPq8vHu4ndiKFDLizex7ehGtfc4JYI5AJNa0EA8+Es9Aag4dLQnoxOxN57NxR89DI13T8EZ1ycLcZPkkaUe5KbGoD9OJouZmJVwoEgpP3RZ76X7VxR5aXaAdX7yunn9gZb52ND8niYvbiRELPrymWI7HgyXJEsV12YkTwA435/O7U99nd38xc/vPkDunhoSEITIjxnDpU6aZPBQGnW6eeqeBhbMtfHtFrsROFz/f08SzdxVzQ14ygUCAl/aep7J1jMUF8dy5OI2wFPbHt9Vy/ex4NqyaJfc3Mjs5mtsWZfHBKRu7vujHYlJYMy+ZNXNT2fzHJg7VD6M6lU4o4LryZO5bNmscWJc/AWZ5+afc97F1xkiB7qEwtRmr1BovcUxPwvQ7fLz6SQe2oUQBNpvjTUN8cnaUMx0OFokV79x8nF2VAySIG759tJsdR7vY/K1C3jzcR6/Dz4bVOfz6M5vEV4CUuEjufPEUxRkxeCVBvPpxK20vreJXn3ZSbXON5wH55fEFJoCFBe17J29gwew4vEMD8tAwrmCAttNJjCkL2bCSaVhNuYyQaOSMaLOBCDXC5fzhxl4+qOxnVXECb3x/Ps/uauDlfR0clXhU5F5V+zr5ZpbMOuIOUNvpwC/p/5nb8/FIN/HotrO4JKH4QyEMSojtj84nURRUkG7V3mi4oFxGXSYO1JSR5GrnyEAWasK0ePooK0RrYSbduhIaXxyeBJRaG8eLCS12Fz94o4ozbbI50bZBr0gKH0RKFKvKkkm1RvHA8mxeltT/qRBytfbpdYq21mTQSckIUJQRhVUU852ttaydm8gbD5WRmRitxb+QEXae6CLVYuTJtJgJYIszmti0cptW/Z2dbmKyojQNIzFiNc8WiKsnBbZ8Zj2bVmyf9Fp+1lyMxlINeF2XS6iSW1OQUSyhWm3YNZ6WLZHjuo2LMaJi8UsWVPWo6kQlQzplPHaWFCTx7Po8fiq16p0jvRxtGpEsGKsVcTV1vHW4V9bppVwkc3O5ZRzYvOQOZqTvxjEaQW+skaULBzStOcf02McqYIqsWJF+jiXKe2K5q68FY90MGn+gPadI0vrmbxZzusXBv+1soqplSIBEas9VGYZwDOF5QekIBKDEtUmAjwrvC4ib2Uc8kv1Mcp8oS6zx20fK+fnuZrYft/O+WCkg5EJVwvaN84kzK3ylKFV7v+YsPTYjg4N6rPGwYMnoJQzm6BBer4Ep+5a/IoYLrqi63o0laWQlmbUNDrkCXJ8TozGRV/a1UNU2yL/vbNBMtDjPKmTXSFWHkyffqqbZ7iU70awR3PteOcOPtjdwUdOzU6Ixy0tUd2zpc9DS76Wpe2wCWFKqj9SMAGdrxPucuksUSnUDg8HD9EQhRliDUVHHB15hET4yEsVKYp+ajlGWl8zgX27KobHPw6JnDkuM9LJsTix3V8zkOysycbh8ArqTKJOee5akkSw16iuFceyrG2L7MTsrC2NZVZpCWlyE5rJPvN3Id7fW8F+7zo+/XZ15jDRvpe2zH+LxRBAdLYFr8JGT6yLS5CUUuRDyDmq87M8l1LcJpftHU7ji1yB7J8fODxKS6F5SkKzF8PajHWQlRLK0ME1IbUh44whHGoZIEiutKEoWBhKhJZWGrhHpDvzkJpuZEa/OT3QMSLdQ0zGMT8iwWufUclQnLVBL35jQqpCWaPKkxSmaYb1QxzoNjA6HWbTUwbmzFimcerxuHULOma4bqhZThzlLpBBfClD5c/eSnEvPVIdEpRnx2udyUTu/4vR4/jy4E8Vqy4ujrjhfmhGnfSb2OX5eA5ZfJCyyM0hPtyLfh6mviaW314w1zkfQ70IXDnBVTypBGw44JrWWdlm8vHt4jAdfreT1DQt4Uvqor5al8PVF6dz208P8eP0cKvJTee9EG8fFqhu/msvG39QSLyndL+yjVeKlMC0C6RvpHfbxxC057DltF2BJbD3QxvrF6fzueCc/u3cuG1+rJEOmaS3SypRnWNj8wILxGGtrT6DbFkNXmxnnqBGD0YBdQIaCepz9g/Kpv2rjoZATZWzv1HVbb8UtLGBP9Qhb9jbx5iGb5nbHpaOuktS/Vxi8Km8d6mLboR45NyasIUQw6OVf182mf9TNc/fM45iwlWVFVn5zsEO+D/DawXYeXDmTKCncJ1rc4uoDNNo9PLY2R94H//Otcu25GrCc4gIKCgeJT3bS2WqiqHSAGWkBuros2O1Bek8+QtBdKUbyS0MYECvaCPf8BMVTzZRiytOmWzGROl78YweJ1ggGJRu+e6yDnGQT++uG6XO4OdUyTExUhIwRAhRnxvKHaoc2QFJBRkj2EjbFpl0t3L8iS0IjQnUUrRMoyozBIc3nts86JXTCGiF2SpujVy5zRUwFpAmdMgR7aW02cuQTK/FJQoGMXikFZkrLT6M0LSVsLpObo1B851ACfVqNmsoNlailKNJBLJ2TILMNJ8sKk+iQ7Ng96OFx6Z3+c0c9P/vgHKvLkmRTBl76sJlesZLaoxmlwQyEFE3tMTJ8XbcsnUNnRzRFzc+O5bE3zlKQZtZamR+vL2TNs8cluenFYkKxJFGpvZyWFdV2Otj9FPr+FzQjNtVb6Wo3UHqdA3tfBIUlDjQm8iUlYCpDn/857oBOWvcxsUQctkGXTJq9WiacJ61FZeuA1m5kJERhFtc/3+cS7ueX9B3JLGHztZ0jlGbFC6A+5kjctA24pC4qMpmO0dxvcX4CDcIfS2da+bTOzmoZNTTYRilRBzmSQZWLI27NvZpuQu9v0SzR3BgjlAhSM33Sovu+NCjVWsHsbRist3Mt5VJrrDOmQfoLUuzMqNvzuhWam8xSoP1f+mEqqEDiw+gsN3Ot5ZLFVAlLYggMbUPf/YSYcAS/GMoU8eVcMKwYCMV/W5TznNQnC9dargCmiYzBgp46wh0PYHBXMzHJufy2i9Pf8QwU0gnLztyMEnu7BLGZfwS5GtgFCYc9BMc+Fsb6Doq7CsXfhRIa/29MWBhDSB+PYiolZFmJLuF+Gb6o1f9aDrWvlCmBXSlqM+kTsGq8Kdq4W1FUvjW96dXfQ/4EdJy1Hz8LsjIAAAAASUVORK5CYII=",p="/UkrainianHouse/assets/logo_mobile2x-AwLDPKuO.png",u="/UkrainianHouse/assets/flag_eng1x-DJQQikZT.png",k="data:image/png;base64,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",B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXMSURBVHgB7ZfPixxFFMe/VdU9P3dn3eyPbBJJJL8IwsYI0YN6EE8Bb0KOiheJ4Cmi4E1PElA8xJO56cFDLoIQFbzEP0CNymKQJG7cH+wGN9nd+dEz3V2vfNW/pmdmJzGEJZd5w5uqrqmp+rxX1e9VASMZyUhGsqsisMty4fKPE+2t8JAJ6UQQ0KEw9J8ijaKmoGA0tbjLFoS5CWUWHEHXPn3/jeauAX70xbfTSrgvkKZnQ22eIa5rg70Bf3UCg3ZAXBL8IEQYhiCtGUDDEQaVokS1pLy27/90d6P5wTefv/2bHdNJBz/z1ifvzs1MuhOT7vderf3npXPngmEgFy9+V7xTxJOOxrwGThLRKQjnRc8Xs4FRCIwDnxRCVuaBHzKYH7L66HR8cIGAgcNQw7A7BbupXFQYrxbKQbNxprnd+pKn6QX8Z3VjnmT5TS2LFyremPfOx1/fcJRakRDbjpLaCFGCkHPs9COLWs9QUwlimFC4CBkoVsFQADsMJlUemx0FZoEmAeI+ti1SY9tsyRXBFUUwHQ1fe5kzMsB2u42VTY0GW1MqqHLJVfMFV867joSUitkkD6JgUkWi1nzBZnAZ7ReR2zVJmxCm2ydqk3E/IWOwqE/Uc2DTZYCUlJ7Pe4TNbSg2iH91lIDiurSl5KFtu32WsSplJ+R2+5BN1BXrHCRgXagEJv5HUhMZpNoJMG91YnbU2SQaW5d4IPOGzLQ7QTZvitgDgwRUpPX8nIiXH0MBMzfLnG15y2XXA5khfdrnl/w4IreCcT0ZxyRG7BBTBj2YOlx0re0hSJ6HfQaH612R/Bwpk8FwyQGmy5QhJjzpsvY6rTt5n/aLGTZ9HnY4onzwn0Vf+31gdkGcHVvF/24cKlGcoziMFFSAicI91AprqDlrMBznKGyh7rnYbJWwvj2FLX+WY6S8D6ARj8DDCYuDdkGGmKrcw4EnlnF46jaOTC1i//g6yu4mFEOFYSfKJj5nFd8P+DmAthGcDAJRwXrrOK4uHMO1v/cMAr42fwXN8nO42Xoem53ZKE1J+8ZKJKEGsYW2neNhxe1gamwbh6ZWcWR6ifU2Dkyso1ZsxLsq84bhTEIItDVCRu3GZhMekJLMYtVRIQ7zGMXjSzg1qfFDP+DBySU8fWwNczNX0KYa7jT3YdufhkfjDFRAyTWYqHiYrW1hulpHjetFbhM2y3BoTV8mWAA8itjjAwY9GNuKyMqK28LR6UXOEktsmYLjKM4qkp+t9xwuuc7eJetN++ZLPJSYh7DAwS5JHiKrU7eelfnfTfY1CGiGDQ48eMlM8o71/S8/AJkujMnVkW/fYWjnPnMOQA9VGxZ7Jug+RC9XQpiBpV36NG3Lb8LePZinsscb2We1GQ7cb7/JudBQPBwZW0817hN5NiGnHbyYi4Nd62I10R8jjT4pjIkmEqb7u32WSeDs9Xr8RFFIQQyaliYHnC1z3H/Ht5iQc7sdwIbApB6pTGG6y5k5POkfmdXjWXusN3wH0fA8jWYrLn1f85FfM2w8AgcJlMvx+ZNoiAejvZJzu0xKkYcWUeaKS5GmM0SdiEECvsV0OoSmR2g0NLbrGvUmH36bIcPxQd7T9Y4fNIIg1By8Nd9HxqQwZcfB2ETNiJlpxVeAAhsgBgFbLYOVdeIYRxirCpSKBq4bW2hhImh7t5CU3CWsdwheBwxADEPYqlsY3Wl5Zo29dp0vb79SQAshmRVXieVWq353n9zbuPvHDS1eBk1tHHVv1f8tq0JrbmNTnFxda79UrppXK1VXDAC2O/TVX7fCycVleqVWlePj4wpjFYVSSTGo3RWSLz4iss7eyjoB3298NDidLvKVcoH98QtBXvND9/rBxuTa+Us/D7kV1uPiqv26webB6ibf/a5zefns2bPnT5/+vZL2HjgSvPf63qpfrJ/grHGSs8V+vnPsUTaFCMErKzd57W8bIZclyVVHqPUPP1u+J8QjZreRjGQkI3l88h8xu1GCO2eVJAAAAABJRU5ErkJggg==",F="data:image/png;base64,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",f="data:image/png;base64,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",H="/UkrainianHouse/assets/flag_nl2x-DnsTOUaD.png",y="/UkrainianHouse/assets/iPhone1x_desktop-ETKU8b7_.png",I="/UkrainianHouse/assets/iPhone2x_desktop-BD8KvnYs.png",S=()=>e.jsx("footer",{className:"py-[24px] pb-[84px] pl-[160px] pr-[160px]",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"flex",children:e.jsxs("div",{className:"flex items-center justify-between text-center",children:[e.jsx(n,{to:"/",children:e.jsxs("picture",{children:[e.jsx("source",{media:"(max-width: 1023.99px)",srcSet:`${c} 1x, ${p} 2x`,width:"54",height:"33"}),e.jsx("source",{media:"(min-width: 1024px)",srcSet:`${b} 1x, ${U} 2x`,width:"101",height:"62"}),e.jsx("img",{srcSet:`${c} 1x, ${p} 2x`,src:c,alt:"logotype",width:"54",height:"33"})]})}),e.jsx("div",{className:"hidden md:flex items-center justify-center text-center ",children:e.jsxs("ul",{className:"grid grid-cols-3 gap-[126px] gap-y-[32px] font-normal text-[24px] leading-relaxed text-center text-gray-700 mr-[74px]",children:[e.jsx("li",{className:"",children:e.jsx(n,{to:"/",className:"",children:"Home"})}),e.jsx("li",{className:"",children:e.jsx(n,{to:"/library",className:"",children:"Library"})}),e.jsx("li",{className:"",children:"Site developers"}),e.jsx("li",{className:"",children:e.jsx(n,{to:"/news",className:"",children:"News"})}),e.jsx("li",{children:e.jsx(n,{to:"/contacts",className:"",children:"Contacts"})}),e.jsx("li",{children:"Activities"})]})}),e.jsxs("ul",{className:"grid grid-cols-2 gap-[20px]",children:[e.jsx("li",{className:"font-bold text-[20px] leading-7 text-center text-gray-900",children:e.jsx("a",{className:"border border-gray-700 rounded-[10px] px-[18px] py-[10px] w-[347px] h-[54px]",href:"",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",children:"Let’s be friends on facebook"})}),e.jsx("li",{className:"font-bold text-[20px] leading-7 text-center text-gray-900",children:e.jsx("a",{className:"border border-gray-700 rounded-lg px-4 py-2 w-96 h-14",href:"https://www.facebook.com/ua.maastricht",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:"Follow us on instagram"})}),e.jsx("li",{className:"font-bold text-[20px] leading-7 text-center text-gray-900",children:e.jsx("a",{className:"border border-gray-700 rounded-lg px-4 py-2 w-96 h-14",href:"",target:"_blank",rel:"noopener noreferrer","aria-label":"Telegram",children:"Connect us on telegram"})}),e.jsx("li",{className:"font-bold text-[20px] leading-7 text-center text-gray-900",children:e.jsx("a",{className:"border border-gray-700 rounded-lg px-4 py-2 w-96 h-14",href:"",target:"_blank",rel:"noopener noreferrer","aria-label":"Linkedin",children:"Find us in LinkedIn"})})]})]})}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("address",{children:e.jsxs("ul",{children:[e.jsx("li",{children:"ukrainianhouse.maastricht@gmail.com"}),e.jsx("li",{children:" Oranjeplein 96, Maastricht, Netherlands, 6224 KV"})]})}),e.jsxs("div",{className:"flex flex-col w-[474px]  mr-10",children:[e.jsx("p",{className:"text-start font-normal text-[20px] leading-5 text-gray-700 mb-3",children:'" In unity, our strength; in community, our essence. United by Ukrainian culture, we create a world where everyone finds their place and feels at home. "'}),e.jsx("p",{className:"text-end italic leading-6 text-gray-700",children:"Lesya Ukrainka"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("img",{srcSet:`${y} 1x, ${I} 2x`,src:y,alt:"Phone in hand",className:"w-[125px] h-[249px]"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("img",{srcSet:`${u} 1x, ${k} 2x`,src:u,alt:"Flag of England",className:"w-[40px] h-[40px]"}),e.jsx("img",{srcSet:`${f} 1x, ${H} 2x`,src:f,alt:"Flag of Netherland",className:"w-[40px] h-[40px]"}),e.jsx("img",{srcSet:`${B} 1x, ${F} 2x`,src:B,alt:"Flag of Ukraine",className:"w-[40px] h-[40px]"})]})]}),e.jsx("p",{className:"flex justify-center",children:"© 2024 Ukrainian House in Maastricht. All rights reserved."})]})]})}),E=()=>e.jsx("header",{className:"py-[24px] pb-[14px] pl-[160px] pr-[160px]",children:e.jsxs("nav",{className:"flex items-center justify-between text-center",children:[e.jsx(n,{to:"/",children:e.jsxs("picture",{children:[e.jsx("source",{media:"(max-width: 1023.99px)",srcSet:`${c} 1x, ${p} 2x`,width:"54",height:"33"}),e.jsx("source",{media:"(min-width: 1024px)",srcSet:`${b} 1x, ${U} 2x`,width:"101",height:"62"}),e.jsx("img",{srcSet:`${c} 1x, ${p} 2x`,src:c,alt:"logotype",width:"54",height:"33"})]})}),e.jsxs("div",{className:"hidden md:flex items-center justify-center text-center ",children:[e.jsxs("ul",{className:"flex gap-16 font-normal text-[24px] leading-relaxed text-center text-gray-700 mr-[74px]",children:[e.jsx("li",{className:"",children:e.jsx(n,{to:"/",className:"",children:"Home"})}),e.jsx("li",{className:"",children:e.jsx(n,{to:"/news",className:"",children:"News"})}),e.jsx("li",{className:"",children:e.jsx(n,{to:"/library",className:"",children:"Library"})}),e.jsx("li",{children:e.jsx(n,{to:"/contacts",className:"",children:"Contacts"})})]}),e.jsx("button",{type:"button",className:" flex justify-center items-center font-bold text-[20px] leading-[1.7] text-center text-gray-900 border border-gray-900 rounded-[10px] py-2.5 px-5 w-[159px] h-[54px] mr-[24px]",children:"Get in touch"}),e.jsx("img",{srcSet:`${u} 1x, ${k} 2x`,src:u,alt:"Flag of England",className:"w-[40px] h-[40px]"})]})]})}),L=()=>e.jsxs("div",{children:[e.jsx(E,{}),e.jsx(i.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(R,{})}),e.jsx(S,{})]}),Y=i.lazy(()=>o(()=>import("./Home-DM1wE5Hb.js"),__vite__mapDeps([0,1]))),O=i.lazy(()=>o(()=>import("./News-D16swWrT.js"),__vite__mapDeps([2,1,3]))),D=i.lazy(()=>o(()=>import("./Library-e4JWD-Yn.js"),__vite__mapDeps([4,1]))),P=i.lazy(()=>o(()=>import("./Contacts-FaLUmDiY.js"),__vite__mapDeps([5,1]))),K=i.lazy(()=>o(()=>import("./LoginPage-_Cjt_Reb.js"),__vite__mapDeps([6,1]))),T=i.lazy(()=>o(()=>import("./Admin-B81WXSpc.js"),__vite__mapDeps([7,1,3]))),z=i.lazy(()=>o(()=>import("./NotFound-te5nywEp.js"),__vite__mapDeps([8,1]))),V=()=>e.jsx(C,{children:e.jsxs(a,{path:"/",element:e.jsx(L,{}),children:[e.jsx(a,{index:!0,element:e.jsx(Y,{})}),e.jsx(a,{path:"/news",element:e.jsx(O,{})}),e.jsx(a,{path:"/library",element:e.jsx(D,{})}),e.jsx(a,{path:"/contacts",element:e.jsx(P,{})}),e.jsx(a,{path:"/loginadmin",element:e.jsx(K,{})}),e.jsx(a,{path:"/admin",element:e.jsx(T,{})}),e.jsx(a,{path:"*",element:e.jsx(z,{})})]})});M.createRoot(document.getElementById("root")).render(e.jsx(G,{children:e.jsx(V,{})}));
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Home-DM1wE5Hb.js","assets/vendor-CKhSRc_D.js","assets/News-D16swWrT.js","assets/useModal-CgveeK53.js","assets/Library-e4JWD-Yn.js","assets/Contacts-FaLUmDiY.js","assets/LoginPage-_Cjt_Reb.js","assets/Admin-B81WXSpc.js","assets/NotFound-te5nywEp.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
