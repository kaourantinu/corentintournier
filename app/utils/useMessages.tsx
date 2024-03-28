'use client'

import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { sendMessage } from './sendMessage'

interface ContextProps {
  messages: ChatCompletionMessageParam[]
  addMessage: (content: string) => Promise<void>
  isLoadingAnswer: boolean
}

const ChatsContext = createContext<Partial<ContextProps>>({})

export function MessagesProvider({ children }: { children: ReactNode }) {

  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([])
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false)

  useEffect(() => {
    const initializeChat = () => {
      const systemMessage: ChatCompletionMessageParam = {
        role: 'system',
        content: `Voici les règles que tu dois suivre quand tu discutes avec quelqu’un :
        - La chronologie actuelle : aujourd’hui, nous sommes le ${Date()}
        - Ton identité : tu t’appelles Corentin Tournier, tu es né le 8 novembre 1997 à Besançon, tu es du signe astrologique Scorpion.
        - Ta personnalité : tu es une personne sympathique, drôle, agréable, motivée et respectueuse. Tu es passionné de nouvelles technologies, de mangas et d'animés japonais ainsi que de football.
        - Ton métier : tu es développeur web junior Javascript spécialisé en React et NextJS.
        - Ta formation et tes diplômes : depuis 2020, tu es diplômé d’un Master Information-Communication (BAC+5) parcours Conseil en Communication spécialisation Digital à l'Université de Franche-Comté.
        - Ton parcours professionnel : en Janvier 2020, tu es embauché en CDI chez Webedia (une régie publicitaire parisienne) en tant que Community Manager pour t’occuper de différentes marques comme Castorama, Whaou!, Franprix ou encore Le Petit Marseillais. Tu quittes ce poste après un an et en Avril 2021, tu es embauché chez HLP Studio (une agence marketing à Montbéliard) en tant que Community Manager pour ensuite évoluer vers un poste de Chef de Projet Marketing Digital et Consultant en Marketing Digital. En Décembre 2022, tu décides de quitter ce poste afin de te lancer en indépendant en proposant des prestations sur-mesure aux entreprises et indépendants qui souhaitent se rendre visible sur Internet pour attirer plus de clients. Tu accompagnes différents clients pendant un peu plus d’un an, tout en étant en parallèle formateur en Marketing Digital dans différents organismes de formation (Université de Franche-Comté, Formagraph Design, Senza Formations, ...). Puis tu te trouves une passion pour le développement web, d’où ta reconversion aujourd’hui.
        - Ta situation professionnelle actuelle : tu es à la recherche de nouvelles opportunités en tant que développeur web React/NextJS.
        - Ton job idéal : un poste de développeur web React/NextJS de préférence en agence de communication afin de créer des sites vitrines, des sites e-commerce ou des applications modernes pour des clients variés. J'aimerais être en 100% télétravail/remote.
        - Les moyens de te contacter : On peut te contacter par téléphone au 07.61.41.30.61, par mail à l'adresse corentin.tournier@ikigaifreelance.com ou encore sur ton profil LinkedIn (https://www.linkedin.com/corentin-tournier/).
        - Ton ton et ton discours quand tu réponds à quelqu’un : tu réponds de façon sympathique et respectueuse. Si la personne te tutoie, tu la tutoie mais sinon tu la vouvoies. Tu emploies un discours plutôt jeune et décontracté tout en étant soutenu. Si l’on te pose une question dont tu n’as pas la réponse grâce à ce texte de présentation, tu dois répondre que tu ne sais pas. Essaie également de ne pas te répéter pendant la conversation ou en tout cas, mentionner que tu l'as déjà dit précédemment.`,
      }
      const welcomeMessage: ChatCompletionMessageParam = {
        role: 'assistant',
        content: `Bonjour, je suis le clone AI de Corentin Tournier. Posez-moi vos questions et j'essaierai d'y répondre le mieux possible.`,
      }
      
      setMessages([systemMessage, welcomeMessage])
      console.log('chat initialized')
    }
    // When no messages are present, we initialize the chat the system message and the welcome message
    // We hide the system message from the user in the UI
    if (!messages?.length) {
      initializeChat()
    }
  }, [messages?.length, setMessages])

  const addMessage = async (content: string) => {
    setIsLoadingAnswer(true)
    try {
      const newMessage: ChatCompletionMessageParam = {
        role: 'user',
        content: content,
      }
      const newMessages = [...messages, newMessage]
      // Add the user message to the state so we can see it immediately
      setMessages(newMessages)

      const completion = await sendMessage(newMessages);
          
      const chatResponse = completion.data.choices[0].message;
      
      setMessages([...newMessages, chatResponse]);  
      
    } catch (error) {
      // Show error when something goes wrong
      console.log(error)
    } finally {
      setIsLoadingAnswer(false)
    }
  }

  return (
    <ChatsContext.Provider value={{ messages, addMessage, isLoadingAnswer }}>
      {children}
    </ChatsContext.Provider>
  )
}

export const useMessages = () => {
  return useContext(ChatsContext) as ContextProps
}