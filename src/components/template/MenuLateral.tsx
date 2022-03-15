import { IconeAjustes, IconeCasa, IconeLogout, IconeSino } from "../icons"
import MenuItem from "./MenuItem"
import Logo from "./Logo"

export default function MenuLateral() {
    return (
        <aside className="flex flex-col">
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to purple-800
                h-20 w-20
            `}>

            <Logo />

            </div>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Início" icone={IconeCasa} />    
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} /> 
                <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} /> 
            </ul>
            <ul>
                <MenuItem url="/notificacoes" texto="Logout" icone={IconeLogout} /> 
            </ul>
        </aside>
    )
}