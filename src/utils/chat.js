/* ============================================
   CHAT.JS — Abre el chat de Tidio
   El script ya está cargado en index.html
   ============================================ */

export function abrirChat() {
  if (window.tidioChatApi) {
    window.tidioChatApi.open();
    console.log('Tidio: chat abierto');
  } else {
    console.warn('Tidio: API no disponible aún');
  }
}
