import style from './Home.module.scss'
import { useContext, useEffect } from 'react'
import AppContext from '@/context/AppContext'

import TypedWords from '@/components/typedWords/typedWords' 

export default function Home() {
  const context = useContext(AppContext)
  useEffect(()=>{
    context.setPage("Home")
  },[])

  return (

    <div className={style.mainContainer}>
      <div className={style.typedWords}>
          
          <TypedWords
          texts={[
            `function helloWorld() { console.log("Hello, World!"); }`,                            // JavaScript
            `def hello_world(): puts "Hello, World!" end`,             // Ruby
            `def hello_world(): print("Hello, World!")`,             // Python
            `func helloWorld() { print("Hello, World!") }`,          // Swift
            `function hello_world() { echo "Hello, World!"; }`,                   // PHP
            `Sub HelloWorld(): MsgBox "Hello, World!" : End Sub`,                           // Visual Basic
            `def hello_world do puts "Hello, World!" end`,                            // Elixir
            `def hello_world : puts "Hello, World!" end`,                            // Crystal
            `function hello_world { echo "Hello, World!"; }`,                         // Bash
            `sub hello_world { print "Hello, World!\n"; }`,                        // Perl
            `function helloWorld() { document.write("Hello, World!"); }`,                // HTML
            `function hello_world() { print("Hello, World!"); }`,                         // Lua
            `print("Hello, World!")`,                         // R
            `CREATE PROCEDURE hello_world AS SELECT 'Hello, World!'`,                         // SQL
            `function hello_world() { print("Hello, World!"); }`,                         // MATLAB
            `function hello_world() println("Hello, World!") end`,                         // Julia
            `public static void helloWorld() { System.out.println("Hello, World!"); }`,  // Java
            `System.out.println("Hello, World!");`,            // Java
            `void hello_world() { cout << "Hello, World!\n"; }`,                      // C++
            `void hello_world() { printf("Hello, World!"); }`,                        // C
            `func helloWorld() { print("Hello, World!") }`,          // Swift
            `fn hello_world() { println!("Hello, World!"); }`,         // Rust
            `fun helloWorld() { println("Hello, World!") }`,           // Kotlin
            `public static void HelloWorld() { Console.WriteLine("Hello, World!"); }`,             // C#
            `global _start
            section .data
                message db "Hello, World!",0xa
                len equ $-message
            section .text
            _start:
                ; write message to stdout
                mov eax, 4          ; write syscall
                mov ebx, 1          ; stdout
                mov ecx, message    ; message address
                mov edx, len        ; message length
                int 0x80            ; call kernel
                ; exit program
                mov eax, 1          ; exit syscall
                xor ebx, ebx        ; return code 0
                int 0x80            ; call kernel`,                            // Assembly (x86 Intel Syntax)
        ]}/>


      </div>
    </div>

  )
}
