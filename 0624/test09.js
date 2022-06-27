let family = {
    'address' : 'seoul',
    members: {},

    addFamily: function(age,name,role){
        this.members[role]={
            age:age,
            name:name
        };
    },
    getHeadcount: function(){
        return Object.keys(this.members).length
    }
};

family.addFamily(30, '클로에', '고모');
family.addFamily(3, '린', '조카1');
family.addFamily(10, '댕댕이', '강아지');

let printMembers = function(){
    let members = family.members;
    for(role in members){
        console.log('role => '+role+', name => '+members[role].name+', age => '+members[role].age);
    }
};

printMembers();

let members = family.members;
members['조카2'] = {age:3, name:'현'};
members.조카1 = {age:5, name: '린'};
delete members.고모;
delete members['강아지'];

printMembers();