import React, { useContext } from 'react'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import useGetPriceData from 'hooks/useGetPriceData'
import useAuth from 'hooks/useAuth'
import useGetCakeBusdLpPrice from 'utils/useGetCakeBusdLpPrice'
import { Menu as UikitMenu } from '../../widgets/Menu'
import links from './config'
import { MOONTOKEN } from '../../constants'

const Menu: React.FC = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const cakeBusdPrice = useGetCakeBusdLpPrice()
  const priceData = useGetPriceData()
  const moonPriceUsd = priceData ? Number(priceData.data[MOONTOKEN.address].price) : undefined

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
      moonPriceUsd={moonPriceUsd}
      cakePriceUsd={cakeBusdPrice}
      {...props}
    />
  )
}

export default Menu
