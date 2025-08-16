import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'ChallengeShareContentCard';

  @Input() shareUrl: string = 'https://www.frontendpro.dev/challenge/WgPLB3f5dCRSIda2s77V'; 

  shareOnTwitter() {
    const url = encodeURIComponent(this.shareUrl);
    const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=Découvrez%20ce%20super%20lien%20!`;
    window.open(twitterUrl, '_blank');
  }

  shareOnLink() {
    const url = encodeURIComponent(this.shareUrl);
    const LinkUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}&text=Découvrez%20ce%20super%20lien%20!`;
    window.open(LinkUrl, '_blank');
  }

  shareOnFacebook() {
    const url = encodeURIComponent(this.shareUrl);
    const FacebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&text=Découvrez%20ce%20super%20lien%20!`;
    window.open(FacebookUrl, '_blank');
  }

  shareOnPinterest() {
    const url = encodeURIComponent(this.shareUrl);
    const PinterestUrl = `https://pinterest.com/pin/create/button/?url=${url}&text=Découvrez%20ce%20super%20lien%20!`;
    window.open(PinterestUrl, '_blank');
  }

  shareOnTelegram() {
    const url = encodeURIComponent(this.shareUrl);
    const TelegramUrl = `https://t.me/share/url?url=${url}&text=Découvrez%20ce%20super%20lien%20!`;
    window.open(TelegramUrl, '_blank');
  }

  copyToClipboard(value: string) {
    navigator.clipboard.writeText(value).then(() => {
      console.log('Lien copié ✅');
      alert('Lien copié dans le presse-papiers ✅');
    }).catch(err => {
      console.error('Erreur lors de la copie :', err);
    });
  }
}
