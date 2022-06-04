import { useReactiveVar } from '@apollo/client'
import { ChangeEvent, FormEvent, useState, VFC } from 'react'
import { todoVar } from '../cache'
import Link from 'next/link'

export const LocalStateB: VFC = () => {
  const todos = useReactiveVar(todoVar)
  return (
    <>
      <p className="mb-3 font-bold">makeVar</p>
      {todos?.map((task, index) => {
        return (
          <p className="mb-3" key={index}>
            {task.title}
          </p>
        )
      })}
      <Link href="/local-state-a">
        <a>Back</a>
      </Link>
    </>
  )
}
