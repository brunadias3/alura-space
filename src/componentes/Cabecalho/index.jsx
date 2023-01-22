import styles from './Cabecalho.module.scss'

export default function Cabecalho () {
    return (
        <header className={styles.cabecalho}>
            <img src='https://raw.githubusercontent.com/alura-cursos/alura-space/aula04/src/componentes/Cabecalho/logo.png' alt='Logo do Alura Space' />

            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type='text' placeholder="O que você procura?" />
                <img src='https://raw.githubusercontent.com/alura-cursos/alura-space/aula04/src/componentes/Cabecalho/search.png' alt="ícone de lupa"></img>
            </div>
        </header>
    )
}