export function bfbanState(isHackerStatus: number) {
  if (isHackerStatus === 5) return { type: 'warning', text: '处理中' };
  if (isHackerStatus === 6) return { type: 'warning', text: '管理投票中' };
  if (isHackerStatus === 1) return { type: 'danger', text: '石锤' };
  if (isHackerStatus === 2) return { type: 'warning', text: '待自证' };
  if (isHackerStatus === 3) return { type: 'success', text: 'Moss自证' };
  if (isHackerStatus === 4) return { type: 'warning', text: '举报无效' };
  if (isHackerStatus === 8) return { type: 'primary', text: '刷枪' };
  return { type: 'success', text: '绿色玩家' } as {
    type: any;
    text: string;
  };
}
