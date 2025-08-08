import * as React from "react"
import clsx from 'clsx';
import Translate from "@/icons/translate.svg?react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
const langs = {
  zh: '简体中文',
  'zh-hant': '繁體中文',
  en: 'English',
  ar: 'عربي',
  de: 'Deutsch',
  ko: '한국인',
  ru: 'Русский',
  fr: 'Français',
  es: 'Español',
  ja: '日本語',
}

export function LangToggle({ className, locale = 'zh' }) {
  const langChange = (item) => {
    if (item.disabled) return
    const re = new RegExp(`^\/(zh-hant|${Object.keys(langs).join('|')})`)
    window.location.pathname = `${item.path}${window.location.pathname.replace(re, '')}`;
  }
  const menus = Object.entries(langs).map(([name, label]) => ({
    name,
    label,
    disabled: locale === name,
    path: name === 'zh' ? '' : `/${name}`
  }))

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="md" className={clsx(className, 'hover:bg-unset focus:border-none focus:shadow-none')}>
          <Translate className="fill-inherit"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-auto z-99">
        {
          menus.map(it =>
            <DropdownMenuItem key={it.name} className="px-4" onClick={() => langChange(it)} disabled={it.disabled}>
              {it.label}
            </DropdownMenuItem>
          )
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
