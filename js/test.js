let a = [{name:'tc_001'}, {name:'tc_004'}, {name:'tc_005'}];

const b = a.filter(n => n.name ==='tc_005');
const c = a.filter(n => n.name ==='tc_005').map(n => n.name);
//console.log('valores', c.values().next());

if(c.values().next().done){
    console.log('done positivo',c.values().next());
    console.log('done positivo',c.values().next().value);
}else{
    console.log('done negativo',c.values().next());
    console.log('done negativo',c.values().next().value);
}










//console.log('valor de a', a);
//console.log('valor de b',b);
//console.log('valor de c', c);

