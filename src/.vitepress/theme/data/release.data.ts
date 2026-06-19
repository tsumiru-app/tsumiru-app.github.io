import type { GetResponseDataTypeFromEndpointMethod } from '@octokit/types'
import { Octokit } from '@octokit/rest'
import { defineLoader } from 'vitepress'

const octokit = new Octokit()

type GitHubRelease = GetResponseDataTypeFromEndpointMethod<typeof octokit.repos.getLatestRelease>

export interface AppRelease {
  stable: GitHubRelease
  beta: GitHubRelease
}

declare const data: AppRelease
export { data }

export default defineLoader({
  async load(): Promise<AppRelease> {
    const { data: stable } = await octokit.repos.getLatestRelease({
      owner: 'aaronbamblett',
      repo: 'tsumiru',
    })

    // Tsumiru has no separate preview/beta channel; mirror the stable release.
    const beta = stable

    return { stable, beta }
  },
})
