const currentYear=2022

class CompanyWorker{
    constructor(_name,_surname,_position,_doe,_dof){
        this.name=_name
        this.surname=_surname
        this.position=_position
        this.doe=_doe
        this.dof=_dof
    }

    get position(){
        return this._position
    }

    set position(pos){
        if(['Doctor','Hipster','Computerman','Spider'].includes(pos))this._position=pos
        else this._position=null
    }

    get doe(){
        return this._doe
    }

    set doe(year){
        if(currentYear>=year)this._doe=year
        else this._doe=null
    }

    get dof(){
        return this._dof
    }

    set dof(year){
        if(this._doe<=year)this._dof=year
        else this._dof=null
    }

}

let worker1=new CompanyWorker('Misis','Keksik','Baker',2021,2022)
let worker2=new CompanyWorker('Mister','Keksik','Doctor',2022,2021)
console.log(worker1,'\n',worker2)