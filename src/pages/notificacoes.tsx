import Layout from '../components/template/Layout'
import useAppData from '../data/hook/useAppData'

export default function Notificacoes() {

  const { alternarTema } = useAppData()

  return (
    <Layout titulo='Notificações' subtitulo='Aqui vocÊ irá gerenciar as suas nottificações'>
      <h3>Conteúdo!!!</h3> 
      <button onClick={alternarTema}>Alternar Tema</button>
    </Layout>

  )
}
