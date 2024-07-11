---
title: Introduction to ExinPool
description: ExinPool
---

ExinPool is operated by the Exin team and is a staking service platform focused on the Mixin ecosystem. Currently, the tokens available for node services are: ETH, XIN, DOT, SOL, and AXS.

At present, the total staked value of ExinPool node assets exceeds 20 million USD. ExinPool aims to provide simple and secure staking services to help users achieve asset appreciation in their native tokens.

### ExinPool Node Operation Process:

**Phase One: Node Fundraising**

ExinPool collects a certain amount of tokens for on-chain staking. Once the fundraising is complete, these tokens enter a lock-up phase. ExinPool will then withdraw these assets for on-chain staking operations.

**Phase Two: Staking Activation**

It takes about two to three days for on-chain staking nodes to become active. Once the nodes are active, they automatically start generating earnings. At the next earnings cycle, the participating nodes will receive their rewards.

**Phase Three: Node Exit**

Sometimes, exiting a node may require queuing. If new users join the nodes while the total number of nodes remains unchanged, the exited assets will be automatically credited to your wallet.

If the amount of exited assets is particularly large, ExinPool will dissolve some nodes to meet the user's exit needs. During large-scale exits, the exited portion will not generate earnings.

**Node Mechanism**

ExinPool uses a queuing mechanism to handle node liquidity issues while keeping the number of nodes unchanged:

- If users queue to join a node, they must wait for other users to exit the node. The tokens in the exit queue will be automatically added.
- If users queue to exit a node, they must wait for other users to join the node. The tokens in the exit queue will be automatically withdrawn.

### Node Reward Distribution Cycle Rules

ExinPool takes a snapshot of holdings at 8:00 AM (UTC+8) daily. Rewards are distributed based on the snapshot, and the distribution time is any time after 9:00 AM (UTC+8). If rewards are not distributed on the day, they may be supplemented at a later time.

The reward distribution cycle varies for different tokens. For specific time cycles, please refer to [Node Reward Distribution Cycle](./rewards.md).

### Asset Security Verification

The ETH, SOL, and DOT nodes are all managed using multi-signature technology to ensure asset security. ExinPool has publicly disclosed [node addresses](./Verify.md) for verification.