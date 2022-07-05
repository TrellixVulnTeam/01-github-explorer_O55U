export function RepositoryItem (props) {
   const {name,description,html_url} = props.repository
   return(
    <li>
      <strong>{name ?? 'Default'}</strong>
      <p>{description}</p>

      <a href={html_url}>Acessar repositório</a>
    </li>
   )
}





