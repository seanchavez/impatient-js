export const arrayWithObjectsToTable = addrs =>
  `
<table>
  ${addrs
    .map(addr =>
      `
      <tr>
        <td>${escapeHtml(addr.first)}</td>
        <td>${escapeHtml(addr.last)}</td>
      </tr>
    `.trim(),
    )
    .join('')}
</table
`.trim();

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;') // first!
    .replace(/>/g, '&gt;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/`/g, '&#96;');
}
