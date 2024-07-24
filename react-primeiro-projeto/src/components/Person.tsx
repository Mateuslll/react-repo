
const getWeekday = (today: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(new Date());
}
type Props = {
    name: string;
    avatar?: string;
    roles: String[];
    adress?: String; //vem de opcional o ?
    //today: Date; //vem de opcional o ?
}

export const Person = ({
    name, 
    avatar = 'https://thumbs.dreamstime.com/b/%C3%ADcone-de-usu%C3%A1rio-m%C3%ADdia-social-vetor-imagem-perfil-do-avatar-padr%C3%A3o-retrato-182347582.jpg', //valor obrigatorio caso nao exista value
    roles
}: Props) => {
    
    const today: Date = new Date();
    //objeto data construido
    // const data ={
    //     name: 'Lucian Legend',
    //     avatar: 'https://ddragon.leagueoflegends.com/cdn/14.13.1/img/champion/Lucian.png',
    //     roles: ['Adcarry', 'Dps', 'Mid/bottom'],
    //     today: new Date()
    // }
    return (
      <div className="p-3">
      <>
        <h1 style={{color: 'red', fontSize:'30px'}} >Champion: {name} - {getWeekday(today)}</h1>
        <img 
            src={avatar}
            alt={name}
            className="w-40" 
        />
        <ul>
            <li>{roles[0]}</li>
            <li>{roles[1]}</li>
            <li>{roles[2]}</li>
        </ul>
      </>  
      </div>
    );
};