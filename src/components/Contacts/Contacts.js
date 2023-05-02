import css from './Contacts.module.css'
export default function Contacts ({title, contacts}) {
    return(
        <>
        {title && <h2 className={css.title}>{title}</h2>}

         <form className={css.form}>
            <label className={css.find}>
                Find by name
                <input type="text"></input>
            </label>
         </form>

         <ul className={css.list}>
          {contacts.map(({name, number, id}) => <li key={id} className={css.item}>
            <p>{name}: {number}</p>
            <button type="button">Delete</button>
          </li>)}
         </ul>
        </>
        
    )
}