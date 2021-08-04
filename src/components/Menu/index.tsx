import React, { useContext } from 'react'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import useAuth from 'hooks/useAuth'
import useGetMoonBusdLpPrice from 'utils/useGetMoonBusdLpPrice'
import { Menu as UikitMenu } from '../../widgets/Menu'
import links from './config'

const Menu: React.FC = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const moonBusdPrice = useGetMoonBusdLpPrice()

  return (
    <UikitMenu
      links={links}
      account={account as string}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage?.code || ''}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      moonPriceUsd={moonBusdPrice}
      {...props}
    />
  )
}

export default Menu
