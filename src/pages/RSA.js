import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import HeaderGeneric from '../components/HeaderGeneric'

import Layout from '../components/layout'

import main_image from '../assets/images/RSA/main_image.png'
import symmetric_crypto from '../assets/images/RSA/symmetric_crypto.png'
import asymmetric_crypto from '../assets/images/RSA/asymmetric_crypto.png'


import genPrimes from '../assets/images/RSA/genPrimes.png'
import n from '../assets/images/RSA/n.png'
import phiCode from '../assets/images/RSA/phicode.png'
import usingGCD from '../assets/images/RSA/usingGCD.png'
import GCDcode from '../assets/images/RSA/GCD.png'
import findD from '../assets/images/RSA/findD.png'

import enc from '../assets/images/RSA/enc.png'
import encCode from '../assets/images/RSA/encCode.png'

import dec from '../assets/images/RSA/dec.png'
import decCode from '../assets/images/RSA/decCode.png'

import output from '../assets/images/RSA/output.png'

import nEqualsPQ from '../assets/images/RSA/n=pq.png'
import phi from '../assets/images/RSA/phi.png'
import pub from '../assets/images/RSA/public.png'
import priv from '../assets/images/RSA/priv.png'
import d from '../assets/images/RSA/d.png'




class RSACrypto extends React.Component{
  render(){
    return(
      <Layout>
        <Helmet title="RSA" />
        <HeaderGeneric headerText="RSA" paragraphText="Encryption and decryption of data using public/private key cryptography"/>
        <h3 style={{textAlign: `center`}}>GitHub repo - <a href="https://github.com/Reeceeboii/RSA" target="_blank" rel="noopener noreferrer">RSA</a></h3>

        <div id="main">

          <section id="content" className="main">
            <span className="image main"><img src={main_image} alt="" /></span>
              <h2><b>Cryptography and modern communications</b></h2>
              <p>The earliest recorded example of cryptography dates back to circa 1900 BC. Hieroglyphs inscribed on the wall of a tomb in Egypt had unusual symbols in place of ones that should have been there. And while this ancient cryptography was
              as simple as shifting letters around or adding in extraneous letters (also known as a substitution cipher), it was still a valid method of encryption; the act of scrambling data (or text in this case) such that a third party
              cannot read it and understand it, were they happen to come across it or to steal it knowingly.</p>
              <p>Now obviously, with the advancement of civilisation and the eventual introduction of the web to the general public, the amount of data being sent between people, groups and nations skyrocketed to an absolutely unfathomable extent.
              In the very early days of the web, the large majority of this data was sent as what's called 'plaintext'. No encryption at all, just the data as is. However, people quickly became aware of the inherent vulnerabilites this introduced to both businesses and
              individuals, and so methods of scrambling this data during transmission were required. This is the birth of the modern understanding of what cryptography is.</p>

              <h2><b>What is RSA?</b></h2>
              <p>RSA is the name of one of the most widely used modern cryptography systems, but is also an acronym for the three Computer Scientists and Cryptographers, Ron <b>R</b>ivest, Adi <b>S</b>hamir, and Leonard <b>A</b>dleman, who first conceptualised the idea of 'public key cryptosystems', and RSA itself back
               in the late 70's.</p>

               <h2><b>The basics of public key cryptography</b></h2>
               <p>I can't explain asymmetric encryption without first explaining symmetric encryption.</p>
               <p>Imagine two people want to securely communicate. They would have some form of shared secret (let's call this secret a key). This key allows them to both encrypt and decrypt data. When the first person sends their message, they encrypt it with their copy of the key, and send the message to the
               second person, who can then decrypt the message with their copy, and read the message.</p>

               <span className="image project"><img src={symmetric_crypto} alt=""/></span>

               <p>At face value, this seems like a perfectly valid way of doing things, and for quite a while it WAS the way of doing things. However, the big issue with symmetric encryption is just that; the symmetry of it. Both parties have the same key. Prior to them being able to 'securely' communicate, this key needs to be agreed upon. And
               that can't be done without communication. But without a key, that communication won't be secure. See the catch?</p>

               <p>To securely communicate, a key is needed, but that key cannot be safely established without encryption, which cannot be provided without a key. This is where asymmetric cryptography systems, and more specifically RSA, come in to play.</p>

               <p>What makes aysmmetric systems different from symmetric ones is that people have two keys rather than one, and only one of these is ever shared with other people. Each person has a public key, which they share everywhere and with everyone. It is quite often placed in some form of publicly accessible key repository/database.
               The private key, however, is just stored locally on the device, and is known to nobody but the owner. These keys are mathematically linked such that when a message is encrypted with one key, it can only be decrypted with the other key of the corresponding pair. So if person A encrypts a message with their private key, only their
               public key can decrypt it, and vice versa.</p>

               <p>Now let's look at the same scenario of messaging again. If the same two people are communicating securely under an asymmetric system, the following occurs: When the first person wants to send a message, they encrypt it with the other person's <b>public</b> key. The aforementioned fact that decryption can only be carried out by the corresponding
               private key means that only the intended recipient can decrypt and read the message. Even if some third party manages to intercept the message before it reaches the intended person, it is essentially just unintelligble digital noise, and cannot be decrypted without the recipient's <b>private</b> key (which only they ever have access to).</p>

               <span className="image project"><img src={asymmetric_crypto} alt=""/></span>

               <h2><b>Technical details</b></h2>
               <p>Each RSA key (private and public) contain two values. The first is called the 'exponent', the second one the 'modulus'.</p>
               <p>To generate a key pair, the first step is to generate two large prime numbers, p and q. Then derive a third value, n, defined as the product of these two primes.</p>
               <span className="image project"><img src={nEqualsPQ} alt=""/></span>
               <br></br>
               <span className="image project"><img src={genPrimes} alt=""/></span>
               <span className="image project"><img src={n} alt=""/></span>



               <p>In production implementations of RSA, these prime numbers are extremely large (most likely around 300 decimal digits). As will be demonstrated soon, the security of RSA entirely depends
               on what's called the 'prime factorisation problem'. This is the idea that the above computation is very very easy to compute one way, but extremely hard to do the reverse of. For example, computing the
               product of two 150 digit prime numbers is extremely fast, even on very old systems. However, the decomposition of this composite number into its original product components is an extremely long process
               that requires immense amounts of processing time. And I'm not talking a few hours, or even days of processing. Computing the prime factorisation of a 4,096 bit (industry standard) RSA key on standard desktop
               hardware would literally and figuratively take longer than the life of the universe; it really is that hard of a problem to compute.</p>

               <p>After this number, n, has been calculated, it becomes the 'modulus' component of both the person's public and and private keys.</p>

               <p>The next step is to calcuate the Euler's Totient Function value in relation to n. This sounds complicated but is a function that takes a value, in this case n, and returns the number of integer less than n that are
              <a href="https://en.wikipedia.org/wiki/Coprime_integers" target="_blank" rel="noopener noreferrer"> coprime</a> with n. This value is kept private. Instead of an iterative approach to calculating this, it can more easily
              be computed as the following:</p>

              <span className="image project"><img src={phi} alt=""/></span>
              <br></br>
              <span className="image project"><img src={phiCode} alt=""/></span>


              <p>After this value has been found, it can be used in calcuating the 'exponent' component of the public key. We will call this exponent e. In order to find e, we need to do the following:</p>
              <ul>
                <li>Iterate through each value strictly between 1 and and Euler's Totient(n)</li>
                <li>Make sure that this value is coprime in relation to n and Euler's Totient(n)</li>
              </ul>

              <span className="image project"><img src={usingGCD} alt=""/></span>

              <p>The second point in that list can be found by finding the greatest common divisor of e and Euler's Totient(n). In my particular implementation, I used the Euclidean Algorithm, although there are
              multiple ways to find this value. Euclidean's algorithm is a recursive approach that calls itself with gcd(value2, value1 (mod value2)) until value2 is equal to 0, in which case the returned result is value1.</p>

              <span className="image project"><img src={GCDcode} alt=""/></span>

              <p>This result, e, then becomes the exponent of the public key. At this stage, the public key may look something like this:</p>

              <span className="image project"><img src={pub} alt=""/></span>
              <p>First value is the exponent (e), the second one is the modulus (n).</p>

              <p>Now that the public key has been calcuated, we can work on the private key. Remember that both keys share the modulus component (n), so that only leaves us with the private key's exponent (let's call this d).
              This value can be found by solving the following equation for d:</p>

              <span className="image project"><img src={d} alt=""/></span>
              <br></br>
              <span className="image project"><img src={findD} alt=""/></span>

              <p>The private key would then look like:</p>

              <span className="image project"><img src={priv} alt=""/></span>

              <h2><b>How the keys are used for encryption and decryption</b></h2>

              <p>Computers only 'do' binary, so any plaintext message needs to be converted to a number before it's pumped thorugh any encryption or decryption routines. I simply just used the character's ASCII equivalents, but there
              are multiple approaches. Real world implementations also use a padding scheme, which is a way of formatting the message's numeric value such that predictable text values (i.e. 'kind regards' in emails or 'to whom it may concern' etc...) cannot
              simply be inferred by seeing their recurring numeric equivalents in the message's numeric translation. I didn't use a padding scheme for the sake of sense (my code is not going near anyone's personal data as it is not cryptographically secure for many reasons,
            so implementating padding would be as useful as a chocolate saucepan).</p>

            <p>So say you had a message: "My name is Reece". Converting each character in that message to it's ASCII values gives you:</p>
            <p>77 121 32 110 97 109 101 32 105 115 32 82 101 101 99 101</p>

            <p>To encrypt those characters, you raise the character's value to the power of the public key's exponent, and use modulo division on the answer with the public key's modulus component:</p>

            <span className="image project"><img src={enc} alt=""/></span>
            <span className="image project"><img src={encCode} alt=""/></span>


            <p>That results in the encrypted data that could be safely transferred over a network:</p>

            <p>456533 1771561 32768 1331000 912673 1295029 <b>1030301</b> 32768 1157625 1520875 32768 551368 <b>1030301</b> <b>1030301</b> 970299 <b>1030301</b></p>
            <p><i>Note how that without padding, the reoccurring 'e' value can easily be seen as 1030301.</i></p>

            <p>When this is received, the private key is used for decryption. The same thing occurs here but in reverse. Each character has its value raised to the power of the
            private key's exponent value (this results in some <b>huge</b> numbers). These values are then divided using modulo division with the private key's modulo value.</p>

            <span className="image project"><img src={dec} alt=""/></span>
            <span className="image project"><img src={decCode} alt=""/></span>


            <p>These decrypted values come out of the decryption function as:</p>
            <p>77 121 32 110 97 109 101 32 105 115 32 82 101 101 99 101</p>
            <p>And are coverted to characters: "My name is Reece"</p>

            <span className="image project"><img src={output} alt=""/></span>

            <h2><b>A few extra notes</b></h2>
            <p>RSA is actually considered overkill for just transmitting text as I demonstrated. Also, it is comparatively slow when compared to other modern crypto techniques. A common use of RSA is for the encryption of AES keys, which are then used in a much faster and simpler symmetric system. The use of
            RSA entirely removes the big catch from single shared key systems I mentioned earlier on this page. While previous symmetric systems required the key to be shared in its plaintext state, RSA allows it to be very securely encrypted and then shared safely; this AES key then goes on to do to the bulk data encryption,
            not RSA itself.</p>

            <p>RSA also has uses besides plain encryption. Remember that the data encrypted with one key (be it the private or public) can only be decrypted by the other key belonging to the corresponding pair? Well, I've explained this particular asymmetric system in the order of public for encryption, then private for decryption. This is good for sharing sensitive data
            as you know that it can only be read by the intended recipient. However, think about the reverse of this; someone encrypts something with their private key and then shares the encrypted data with someone else. If this data can be successfully decrypted using the sender's public key, then it essentially proves that it was sent by them. It acts as what's called a digital
            signature, and is widely used by businesses to prove the authenticity of their websites to clients visiting it.</p>

            <ul className="actions">
              <li><Link to="/" className="button">Return home</Link></li>
            </ul>

          </section>
        </div>
      </Layout>
    )
  }
}

export default RSACrypto
